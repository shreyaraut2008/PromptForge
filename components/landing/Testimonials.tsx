"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const testimonials = [
  {
    quote:
      "PromptForge transformed how our team writes code. The AI workspace feels like having a senior dev pair-programming with you 24/7.",
    author: "Sarah Chen",
    role: "Staff Engineer, Vercel",
    avatar: "SC",
  },
  {
    quote:
      "The dashboard is stunning. Finally, a dev tool that matches the quality of Linear and Cursor. Our productivity jumped 40%.",
    author: "Marcus Rivera",
    role: "CTO, Nexus Labs",
    avatar: "MR",
  },
  {
    quote:
      "Clean UI, fast performance, and the terminal aesthetic is chef's kiss. This is what developer tools should feel like in 2026.",
    author: "Alex Kim",
    role: "Founder, DevStack",
    avatar: "AK",
  },
];

export function Testimonials() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Loved by developers
          </h2>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <GlassCard className="h-full">
                <p className="text-sm leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-300">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      {t.author}
                    </p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
