"use client";

import {
  Bot,
  Code2,
  FolderKanban,
  GitBranch,
  Shield,
  Zap,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { HoverLift, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const features = [
  {
    icon: Bot,
    title: "AI Code Assistant",
    description:
      "Explain, refactor, and debug code with context-aware AI that understands your project.",
    color: "text-indigo-400",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "Organize projects with a beautiful dashboard. Track progress and collaborate seamlessly.",
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: Code2,
    title: "Developer Workspace",
    description:
      "Terminal-style chat, markdown editor, and bug fix panels in one unified environment.",
    color: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: GitBranch,
    title: "Version Control Ready",
    description:
      "Built for modern workflows. Integrate with your existing tools and ship with confidence.",
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "JWT authentication, encrypted sessions, and enterprise-grade security out of the box.",
    color: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance with instant loads, smooth animations, and zero friction.",
    color: "text-rose-400",
    glow: "group-hover:shadow-rose-500/20",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Everything you need to build
          </h2>
          <p className="mt-4 text-zinc-400">
            A complete toolkit for modern AI-assisted development.
          </p>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <HoverLift>
                <GlassCard
                  className={`group h-full transition-shadow duration-300 hover:border-white/15 ${feature.glow}`}
                >
                  <feature.icon
                    className={`mb-4 h-8 w-8 ${feature.color}`}
                  />
                  <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </GlassCard>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
