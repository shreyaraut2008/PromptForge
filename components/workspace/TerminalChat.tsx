"use client";

import { useState } from "react";
import { Send, Terminal } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "system",
    content: "PromptForge Terminal v1.0 — AI workspace ready.",
  },
  {
    role: "user",
    content: "Explain async/await in JavaScript",
  },
  {
    role: "assistant",
    content:
      "async/await is syntactic sugar over Promises. The `async` keyword marks a function as asynchronous, returning a Promise. `await` pauses execution until the Promise resolves, making async code read like synchronous code.",
  },
];

export function TerminalChat() {
  const [messages] = useState(initialMessages);
  const [input, setInput] = useState("");

  return (
    <GlassCard className="flex h-full flex-col overflow-hidden">
      <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-4">
        <Terminal className="h-4 w-4 text-emerald-400" />
        <h3 className="text-sm font-semibold text-zinc-100">Terminal Chat</h3>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          Online
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto font-mono text-xs">
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.role === "system" && (
              <p className="text-zinc-600">
                <span className="text-emerald-500/70">$</span> {msg.content}
              </p>
            )}
            {msg.role === "user" && (
              <p className="text-indigo-300">
                <span className="text-indigo-500/70">&gt;</span> {msg.content}
              </p>
            )}
            {msg.role === "assistant" && (
              <p className="pl-4 text-zinc-400 leading-relaxed">
                {msg.content}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-4">
        <span className="text-emerald-500/70 font-mono text-xs">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command..."
          className="flex-1 bg-transparent font-mono text-xs text-zinc-300 placeholder:text-zinc-600 outline-none"
          disabled
        />
        <button className="rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400">
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </GlassCard>
  );
}
