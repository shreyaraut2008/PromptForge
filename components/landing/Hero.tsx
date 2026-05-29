"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">
      <FadeIn className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300"
        >
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Developer Workspace
        </motion.div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-gradient">PromptForge</span>
          <br />
          <span className="text-zinc-100">Build faster. Ship smarter.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          The premium AI developer workspace that combines intelligent code
          assistance, project management, and a terminal-native experience —
          built for teams who ship at the speed of thought.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg" className="group min-w-[180px]">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" size="lg" className="min-w-[180px]">
              Sign In
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-indigo-400" />
            Terminal-native UI
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-cyan-400" />
            AI-powered workflows
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            Premium experience
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
