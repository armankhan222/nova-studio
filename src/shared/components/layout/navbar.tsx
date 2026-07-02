"use client";

import Link from "next/link";
import { Menu } from "lucide-react";



import { Logo } from "./logo";
import { siteConfig } from "@/shared/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button
            className="rounded-xl bg-violet-600 hover:bg-violet-700"
            asChild
          >
            <Link href="/signup">Start Free</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-8 flex flex-col gap-6">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-medium"
                  >
                    {item.title}
                  </Link>
                ))}

                <Button asChild>
                  <Link href="/signup">
                    Start Free
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
