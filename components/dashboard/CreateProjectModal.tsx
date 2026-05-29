"use client";

import { useState } from "react";
import { ApiError } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";

interface CreateProjectModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (title: string, description: string) => Promise<unknown>;
}

export function CreateProjectModal({
  open,
  onClose,
  onCreate,
}: CreateProjectModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Project title is required");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await onCreate(title.trim(), description.trim());
      setTitle("");
      setDescription("");
      onClose();
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Failed to create project"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    if (!loading) {
      setTitle("");
      setDescription("");
      setError("");
      onClose();
    }
  }

  return (
    <Modal open={open} onClose={handleClose} title="Create New Project">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <Input
          label="Project Title"
          placeholder="My Awesome Project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />

        <Textarea
          label="Description"
          placeholder="What are you building?"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="secondary"
            className="flex-1"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" loading={loading} className="flex-1">
            Create Project
          </Button>
        </div>
      </form>
    </Modal>
  );
}
