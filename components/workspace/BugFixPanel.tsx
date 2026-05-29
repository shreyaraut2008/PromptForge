"use client";

import { useState } from "react";
import { Bug, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Textarea } from "@/components/ui/Input";

export function BugFixPanel() {
  const [error, setError] = useState(
    "TypeError: Cannot read properties of undefined (reading 'map')"
  );
  const [code, setCode] = useState(
    "const items = data.items.map(item => item.name);"
  );

  return (
    <GlassCard className="h-full">
      <div className="mb-4 flex items-center gap-2">
        <Bug className="h-4 w-4 text-red-400" />
        <h3 className="text-sm font-semibold text-zinc-100">Bug Fix Panel</h3>
      </div>

      <Textarea
        label="Error Message"
        value={error}
        onChange={(e) => setError(e.target.value)}
        rows={2}
        className="font-mono text-xs text-red-300"
      />

      <div className="mt-4">
        <Textarea
          label="Problematic Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={4}
          className="font-mono text-xs"
        />
      </div>

      <Button className="mt-4 w-full" variant="secondary" disabled>
        <Wrench className="h-4 w-4" />
        Analyze & Fix
      </Button>

      <div className="mt-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-emerald-400">
          Suggested Fix
        </p>
        <pre className="overflow-x-auto font-mono text-xs text-emerald-300">
{`const items = data?.items?.map(
  item => item.name
) ?? [];`}
        </pre>
      </div>
    </GlassCard>
  );
}
