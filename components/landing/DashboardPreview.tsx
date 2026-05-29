"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  FolderOpen,
  Search,
  Settings,
  Terminal,
} from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Preview
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Your command center
          </h2>
          <p className="mt-4 text-zinc-400">
            A dashboard designed for developers who demand excellence.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-cyan-500/20 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-2xl border border-white/10 neon-glow">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-lg bg-white/5 px-4 py-1 text-xs text-zinc-500">
                <Search className="h-3 w-3" />
                promptforge.dev/dashboard
              </div>
            </div>

            <div className="flex min-h-[400px]">
              <div className="hidden w-48 border-r border-white/10 p-4 sm:block">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20">
                    <Terminal className="h-4 w-4 text-indigo-400" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-200">
                    PromptForge
                  </span>
                </div>
                <nav className="space-y-1">
                  {[
                    { icon: Activity, label: "Dashboard", active: true },
                    { icon: FolderOpen, label: "Projects" },
                    { icon: Bot, label: "Workspace" },
                    { icon: Settings, label: "Settings" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                        item.active
                          ? "bg-indigo-500/15 text-indigo-300"
                          : "text-zinc-500"
                      }`}
                    >
                      <item.icon className="h-3.5 w-3.5" />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="flex-1 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    Welcome back, Developer
                  </h3>
                  <p className="text-sm text-zinc-500">
                    3 active projects · 12 AI sessions today
                  </p>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Projects", value: "12" },
                    { label: "AI Sessions", value: "847" },
                    { label: "Lines Saved", value: "24k" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                    >
                      <p className="text-lg font-bold text-zinc-100">
                        {stat.value}
                      </p>
                      <p className="text-xs text-zinc-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {["API Gateway", "Auth Service", "Dashboard UI"].map(
                    (project) => (
                      <div
                        key={project}
                        className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-indigo-500/20"
                      >
                        <p className="text-sm font-medium text-zinc-200">
                          {project}
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          Updated 2h ago
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
