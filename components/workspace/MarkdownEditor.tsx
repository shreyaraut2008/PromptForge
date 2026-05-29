"use client";

import { useState } from "react";
import { Eye, FileText } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const defaultMarkdown = `# Project Notes

## Architecture
- Next.js 16 App Router
- MongoDB with Mongoose
- JWT Authentication

## TODO
- [ ] Add OpenAI integration
- [x] Build premium UI
- [ ] Deploy to production
`;

export function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [preview, setPreview] = useState(false);

  function renderPreview(text: string) {
    return text
      .replace(/^### (.*$)/gm, '<h3 class="text-sm font-semibold text-zinc-200 mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-base font-semibold text-zinc-100 mt-4 mb-2">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-lg font-bold text-zinc-100 mb-3">$1</h1>')
      .replace(/^- \[x\] (.*$)/gm, '<li class="text-zinc-400 line-through">$1</li>')
      .replace(/^- \[ \] (.*$)/gm, '<li class="text-zinc-300">$1</li>')
      .replace(/^- (.*$)/gm, '<li class="text-zinc-300">$1</li>')
      .replace(/\n/g, "<br />");
  }

  return (
    <GlassCard className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-zinc-100">Markdown Editor</h3>
        </div>
        <button
          onClick={() => setPreview(!preview)}
          className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-200"
        >
          <Eye className="h-3.5 w-3.5" />
          {preview ? "Edit" : "Preview"}
        </button>
      </div>

      {preview ? (
        <div
          className="flex-1 overflow-y-auto rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm"
          dangerouslySetInnerHTML={{ __html: renderPreview(markdown) }}
        />
      ) : (
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="flex-1 resize-none rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-sm text-zinc-200 outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
        />
      )}
    </GlassCard>
  );
}
