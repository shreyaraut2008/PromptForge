"use client";

import { useState } from "react";
import { Plus, StickyNote } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const defaultNotes = [
  { id: "1", text: "Review API authentication flow", done: false },
  { id: "2", text: "Update dashboard components", done: true },
  { id: "3", text: "Add workspace AI integration", done: false },
];

export function NotesWidget() {
  const [notes] = useState(defaultNotes);

  return (
    <GlassCard>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StickyNote className="h-4 w-4 text-amber-400" />
          <h3 className="text-sm font-semibold text-zinc-100">Quick Notes</h3>
        </div>
        <button className="rounded-lg p-1 text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-300">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <ul className="space-y-2">
        {notes.map((note) => (
          <li
            key={note.id}
            className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-white/[0.03]"
          >
            <input
              type="checkbox"
              checked={note.done}
              readOnly
              className="mt-0.5 rounded border-white/20 bg-white/5 text-indigo-500"
            />
            <span
              className={
                note.done ? "text-zinc-600 line-through" : "text-zinc-300"
              }
            >
              {note.text}
            </span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
