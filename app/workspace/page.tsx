"use client";

import { GradientBackground } from "@/components/shared/GradientBackground";
import { MobileNav, Sidebar } from "@/components/dashboard/Sidebar";
import { BugFixPanel } from "@/components/workspace/BugFixPanel";
import { CodeExplainer } from "@/components/workspace/CodeExplainer";
import { MarkdownEditor } from "@/components/workspace/MarkdownEditor";
import { TerminalChat } from "@/components/workspace/TerminalChat";
import { Terminal } from "lucide-react";

export default function WorkspacePage() {
  return (
    <div className="relative flex min-h-screen bg-[#030712]">
      <GradientBackground />
      <Sidebar />

      <div className="relative z-10 flex flex-1 flex-col pb-16 lg:pb-0">
        <header className="flex h-16 items-center gap-3 border-b border-white/5 px-6">
          <Terminal className="h-5 w-5 text-emerald-400" />
          <div>
            <h1 className="text-lg font-semibold text-zinc-100">AI Workspace</h1>
            <p className="text-xs text-zinc-500">
              Developer console · UI preview mode
            </p>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <CodeExplainer />
              <BugFixPanel />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <MarkdownEditor />
              <TerminalChat />
            </div>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
