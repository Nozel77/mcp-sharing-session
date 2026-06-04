import { create } from "zustand";

type Project = {
  id: string;
  name: string;
};

type ProjectStore = {
  projects: Project[];
  addProject: (name: string) => void;
  resetProjects: () => void;
};

const initialProjects: Project[] = [
  { id: "next-app-router", name: "Next.js App Router" },
  { id: "tailwind-v4", name: "Tailwind CSS v4" },
  { id: "tanstack-query", name: "TanStack Query" },
];

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: initialProjects,
  addProject: (name) =>
    set((state) => ({
      projects: [...state.projects, { id: crypto.randomUUID(), name }],
    })),
  resetProjects: () => set({ projects: initialProjects }),
}));
