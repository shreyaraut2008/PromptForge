"use client";

import { Activity, Bot, FolderPlus, LogIn } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Project } from "@/lib/types";
import { formatRelativeTime } from "@/lib/utils";

interface RecentActivityProps {
  projects: Project[];
}

export function RecentActivity({ projects }: RecentActivityProps) {
  const activities = [
    { icon: LogIn, text: "Signed in to PromptForge", time: "Just now" },
    ...projects.slice(0, 3).map((p) => ({
      icon: FolderPlus,
      text: `Created project "${p.title}"`,
      time: formatRelativeTime(p.createdAt),
    })),
    { icon: Bot, text: "AI workspace session started", time: "2h ago" },
    { icon: Activity, text: "Dashboard accessed", time: "3h ago" },
  ].slice(0, 5);

  return (
    <GlassCard>
      <div className="mb-4 flex items-center gap-2">
        <Activity className="h-4 w-4 text-emerald-400" />
        <h3 className="text-sm font-semibold text-zinc-100">Recent Activity</h3>
      </div>

      <ul className="space-y-3">
        {activities.map((activity, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-white/5 p-1.5">
              <activity.icon className="h-3 w-3 text-zinc-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm text-zinc-300">{activity.text}</p>
              <p className="text-xs text-zinc-600">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
