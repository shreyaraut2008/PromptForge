"use client";

import { Bot, Clock, FolderOpen, Zap } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface StatsCardsProps {
  projectCount: number;
}

export function StatsCards({ projectCount }: StatsCardsProps) {
  const stats = [
    {
      label: "Total Projects",
      value: projectCount.toString(),
      icon: FolderOpen,
      color: "text-indigo-400",
    },
    {
      label: "AI Sessions",
      value: "24",
      icon: Bot,
      color: "text-cyan-400",
    },
    {
      label: "Active Today",
      value: projectCount > 0 ? "1" : "0",
      icon: Zap,
      color: "text-purple-400",
    },
    {
      label: "Last Active",
      value: "Now",
      icon: Clock,
      color: "text-emerald-400",
    },
  ];

  return (
    <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StaggerItem key={stat.label}>
          <GlassCard className="group transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-indigo-500/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-zinc-100">
                  {stat.value}
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 transition-colors group-hover:bg-white/10">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </GlassCard>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
