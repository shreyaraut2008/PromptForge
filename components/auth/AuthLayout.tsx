"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import { GradientBackground } from "@/components/shared/GradientBackground";
import { FadeIn } from "@/components/ui/motion";

export function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <GradientBackground />
      <FadeIn className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 neon-glow">
              <Terminal className="h-5 w-5 text-indigo-400" />
            </div>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-zinc-100">{title}</h1>
          <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
        </div>
        <div className="glass-strong neon-glow rounded-2xl p-8">{children}</div>
      </FadeIn>
    </div>
  );
}
