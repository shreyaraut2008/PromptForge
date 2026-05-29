"use client";

import { FolderOpen, Plus } from "lucide-react";
import type { Project } from "@/lib/types";
import { formatRelativeTime } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard, SkeletonCard } from "@/components/ui/GlassCard";
import { HoverLift, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface ProjectsGridProps {
  projects: Project[];
  loading: boolean;
  onCreateClick: () => void;
}

export function ProjectsGrid({
  projects,
  loading,
  onCreateClick,
}: ProjectsGridProps) {
  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <GlassCard className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10">
          <FolderOpen className="h-8 w-8 text-indigo-400" />
        </div>
        <h3 className="text-lg font-semibold text-zinc-100">No projects yet</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">
          Create your first project to start building with PromptForge.
        </p>
        <Button className="mt-6" onClick={onCreateClick}>
          <Plus className="h-4 w-4" />
          Create Project
        </Button>
      </GlassCard>
    );
  }

  return (
    <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <StaggerItem key={project._id}>
          <HoverLift>
            <GlassCard className="group h-full transition-all duration-300 hover:border-indigo-500/20 hover:neon-glow">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 transition-colors group-hover:bg-indigo-500/20">
                  <FolderOpen className="h-5 w-5 text-indigo-400" />
                </div>
                <span className="text-xs text-zinc-600">
                  {formatRelativeTime(project.createdAt)}
                </span>
              </div>
              <h3 className="font-semibold text-zinc-100">{project.title}</h3>
              {project.description && (
                <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
                  {project.description}
                </p>
              )}
            </GlassCard>
          </HoverLift>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
