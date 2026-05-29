"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, token, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!token || !user)) {
      router.replace("/login");
    }
  }, [loading, token, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-500" />
          <p className="text-sm text-zinc-500">Authenticating...</p>
        </div>
      </div>
    );
  }

  if (!token || !user) {
    return null;
  }

  return <>{children}</>;
}
