"use client";

import { useState } from "react";
import { GradientBackground } from "@/components/shared/GradientBackground";
import { AIAssistantPanel } from "@/components/dashboard/AIAssistantPanel";
import { CreateProjectModal } from "@/components/dashboard/CreateProjectModal";
import { Header } from "@/components/dashboard/Header";
import { MobileNav, Sidebar } from "@/components/dashboard/Sidebar";
import { NotesWidget } from "@/components/dashboard/NotesWidget";
import { ProjectsGrid } from "@/components/dashboard/ProjectsGrid";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { useProjects } from "@/hooks/useProjects";

export default function DashboardPage() {
  const { projects, loading, createProject } = useProjects();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-[#030712]">
      <GradientBackground />
      <Sidebar />

      <div className="relative z-10 flex flex-1 flex-col pb-16 lg:pb-0">
        <Header onCreateProject={() => setModalOpen(true)} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-8">
            <StatsCards projectCount={projects.length} />

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zinc-100">
                  Your Projects
                </h2>
              </div>
              <ProjectsGrid
                projects={projects}
                loading={loading}
                onCreateClick={() => setModalOpen(true)}
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <AIAssistantPanel />
              </div>
              <div className="space-y-6">
                <NotesWidget />
                <RecentActivity projects={projects} />
              </div>
            </div>
          </div>
        </main>
      </div>

      <MobileNav />

      <CreateProjectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={createProject}
      />
    </div>
  );
}
