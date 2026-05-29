"use client";

import { useState } from "react";
import { Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Textarea } from "@/components/ui/Input";

export function CodeExplainer() {
  const [code, setCode] = useState(
    `function fibonacci(n: number): number {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}`
  );
  const [explanation] = useState(
    "This is a recursive implementation of the Fibonacci sequence. Each call computes fib(n-1) + fib(n-2). Time complexity is O(2^n) due to redundant calculations. Consider memoization or iterative approach for better performance."
  );

  return (
    <GlassCard className="h-full">
      <div className="mb-4 flex items-center gap-2">
        <Code2 className="h-4 w-4 text-indigo-400" />
        <h3 className="text-sm font-semibold text-zinc-100">AI Code Explainer</h3>
      </div>

      <Textarea
        label="Paste your code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={8}
        className="font-mono text-xs"
      />

      <Button className="mt-4 w-full" disabled>
        <Sparkles className="h-4 w-4" />
        Explain Code
      </Button>

      <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Explanation
        </p>
        <p className="text-sm leading-relaxed text-zinc-300">{explanation}</p>
      </div>
    </GlassCard>
  );
}
