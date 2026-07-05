-- ==========================================
-- Nova Studio
-- Migration 002 - Projects & Uploads
-- ==========================================

-- ==========================================
-- PROJECTS
-- ==========================================

create table public.projects (

    id uuid primary key default gen_random_uuid(),

    owner_id uuid not null
        references public.profiles(id)
        on delete cascade,

    organization_id uuid
        references public.organizations(id)
        on delete set null,

    name text not null,

    description text,

    status text not null default 'draft',

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

-- ==========================================
-- UPLOADS
-- ==========================================

create table public.uploads (

    id uuid primary key default gen_random_uuid(),

    project_id uuid not null
        references public.projects(id)
        on delete cascade,

    file_name text not null,

    storage_path text not null,

    mime_type text,

    file_size bigint,

    width integer,

    height integer,

    created_at timestamptz not null default now()
);

-- ==========================================
-- INDEXES
-- ==========================================

create index idx_projects_owner
on public.projects(owner_id);

create index idx_projects_org
on public.projects(organization_id);

create index idx_uploads_project
on public.uploads(project_id);

-- ==========================================
-- UPDATED_AT TRIGGER
-- ==========================================

create trigger update_projects_updated_at
before update on public.projects
for each row
execute function public.handle_updated_at();

-- ==========================================
-- ENABLE RLS
-- ==========================================

alter table public.projects enable row level security;

alter table public.uploads enable row level security;