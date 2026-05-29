"use client";

import { GradientBackground } from "@/components/shared/GradientBackground";
import { MobileNav, Sidebar } from "@/components/dashboard/Sidebar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { formatDate, getInitials } from "@/lib/utils";
import { Moon, Palette, Shield, User } from "lucide-react";

export default function SettingsPage() {
  const { user, logout } = useAuth();

  return (
    <div className="relative flex min-h-screen bg-[#030712]">
      <GradientBackground />
      <Sidebar />

      <div className="relative z-10 flex flex-1 flex-col pb-16 lg:pb-0">
        <header className="flex h-16 items-center border-b border-white/5 px-6">
          <h1 className="text-lg font-semibold text-zinc-100">Settings</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-2xl space-y-6">
            <GlassCard>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-xl font-bold text-indigo-300">
                  {user?.name ? getInitials(user.name) : "?"}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {user?.name ?? "User"}
                  </h2>
                  <p className="text-sm text-zinc-400">{user?.email}</p>
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  label="Display Name"
                  defaultValue={user?.name ?? ""}
                  readOnly
                />
                <Input
                  label="Email"
                  defaultValue={user?.email ?? ""}
                  readOnly
                />
              </div>
            </GlassCard>

            <GlassCard>
              <div className="mb-4 flex items-center gap-2">
                <Palette className="h-4 w-4 text-purple-400" />
                <h3 className="text-sm font-semibold text-zinc-100">
                  Theme Settings
                </h3>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <Moon className="h-4 w-4 text-zinc-400" />
                  <div>
                    <p className="text-sm text-zinc-200">Dark Mode</p>
                    <p className="text-xs text-zinc-500">
                      Cyber minimalism theme active
                    </p>
                  </div>
                </div>
                <div className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white">
                  Active
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="mb-4 flex items-center gap-2">
                <User className="h-4 w-4 text-cyan-400" />
                <h3 className="text-sm font-semibold text-zinc-100">
                  Account Information
                </h3>
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-zinc-500">Member since</dt>
                  <dd className="text-zinc-300">
                    {user?.createdAt
                      ? formatDate(user.createdAt)
                      : "—"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-500">Account ID</dt>
                  <dd className="font-mono text-xs text-zinc-400">
                    {String(user?._id ?? user?.id ?? "—").slice(-8)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-500">Plan</dt>
                  <dd className="text-zinc-300">Free</dd>
                </div>
              </dl>
            </GlassCard>

            <GlassCard>
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-zinc-100">
                  Account Actions
                </h3>
              </div>
              <Button variant="danger" onClick={logout} className="w-full">
                Sign Out
              </Button>
            </GlassCard>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
