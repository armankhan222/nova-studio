-- ==========================================
-- Nova Studio
-- Migration 001 - Foundation
-- ==========================================

-- Enable UUID generation
create extension if not exists "pgcrypto";

-- ==========================================
-- PROFILES
-- ==========================================

create table public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,

    full_name text,
    username text unique,
    avatar_url text,
    bio text,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ==========================================
-- ORGANIZATIONS
-- ==========================================

create table public.organizations (

    id uuid primary key default gen_random_uuid(),

    owner_id uuid not null
        references public.profiles(id)
        on delete cascade,

    name text not null,
    slug text unique not null,
    logo_url text,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ==========================================
-- ORGANIZATION MEMBERS
-- ==========================================

create table public.organization_members (

    id uuid primary key default gen_random_uuid(),

    organization_id uuid not null
        references public.organizations(id)
        on delete cascade,

    user_id uuid not null
        references public.profiles(id)
        on delete cascade,

    role text not null default 'member'
        check (role in ('owner','admin','member')),

    created_at timestamptz not null default now(),

    unique (organization_id, user_id)
);

-- ==========================================
-- INDEXES
-- ==========================================

create index idx_profiles_username
on public.profiles(username);

create index idx_org_owner
on public.organizations(owner_id);

create index idx_org_members_user
on public.organization_members(user_id);

create index idx_org_members_org
on public.organization_members(organization_id);

-- ==========================================
-- UPDATED_AT TRIGGER
-- ==========================================

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

create trigger update_profiles_updated_at
before update on public.profiles
for each row
execute function public.handle_updated_at();

create trigger update_organizations_updated_at
before update on public.organizations
for each row
execute function public.handle_updated_at();

-- ==========================================
-- ENABLE RLS
-- ==========================================

alter table public.profiles enable row level security;

alter table public.organizations enable row level security;

alter table public.organization_members enable row level security;