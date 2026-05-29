"use client";

import { Bot, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function AIAssistantPanel() {
  return (
    <GlassCard className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
          <Bot className="h-4 w-4 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-100">AI Assistant</h3>
          <p className="text-xs text-zinc-500">Always ready to help</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto">
        <div className="rounded-xl bg-white/[0.03] p-3">
          <p className="text-xs text-zinc-400">
            👋 Hi! I&apos;m your AI assistant. Ask me anything about your code,
            projects, or development workflow.
          </p>
        </div>
        <div className="ml-4 rounded-xl bg-indigo-500/10 p-3">
          <p className="text-xs text-indigo-300">
            How do I optimize this React component?
          </p>
        </div>
        <div className="rounded-xl bg-white/[0.03] p-3">
          <p className="text-xs text-zinc-400">
            Use React.memo for pure components, useMemo for expensive
            computations, and useCallback for stable function references...
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        <input
          type="text"
          placeholder="Ask anything..."
          className="flex-1 bg-transparent text-sm text-zinc-300 placeholder:text-zinc-600 outline-none"
          disabled
        />
        <button className="rounded-lg bg-indigo-500/20 p-1.5 text-indigo-400">
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </GlassCard>
  );
}
