"use client";

import { Bell, Plus, Search } from "lucide-react";
import { getInitials } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onCreateProject?: () => void;
}

export function Header({ onCreateProject }: HeaderProps) {
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/5 px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-zinc-100">
          Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:flex">
          <Search className="h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm text-zinc-300 placeholder:text-zinc-600 outline-none"
          />
          <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-zinc-600">
            ⌘K
          </kbd>
        </div>

        {onCreateProject && (
          <Button size="sm" onClick={onCreateProject}>
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">New Project</span>
          </Button>
        )}

        <button className="rounded-xl p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-300">
          <Bell className="h-4 w-4" />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-300">
          {user?.name ? getInitials(user.name) : "?"}
        </div>
      </div>
    </header>
  );
}
