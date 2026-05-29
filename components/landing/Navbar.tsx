"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20">
            <Terminal className="h-4 w-4 text-indigo-400" />
          </div>
          <span className="text-sm font-semibold text-zinc-100">
            PromptForge
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20">
            <Terminal className="h-3.5 w-3.5 text-indigo-400" />
          </div>
          <span className="text-sm font-medium text-zinc-400">
            PromptForge
          </span>
        </div>
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} PromptForge. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/login"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </footer>
  );
}
