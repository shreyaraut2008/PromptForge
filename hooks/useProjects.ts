"use client";

import { useCallback, useEffect, useState } from "react";

import { api } from "@/lib/api";
import type { Project } from "@/lib/types";
import { useAuth } from "./useAuth";

export function useProjects() {
  const { token } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    if (!token) {
      setProjects([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await api.getProjects(token);
      setProjects(data.projects);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load projects");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const createProject = useCallback(
    async (title: string, description: string) => {
      if (!token) throw new Error("Not authenticated");

      const data = await api.createProject(token, { title, description });
      setProjects((prev) => [data.project, ...prev]);
      return data.project;
    },
    [token]
  );

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
  };
}
