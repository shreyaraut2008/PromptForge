import type {
  AuthResponse,
  MeResponse,
  ProjectResponse,
  ProjectsResponse,
  SignupResponse,
} from "./types";

const API_BASE = "/api";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  token?: string | null
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(
      (data as { message?: string }).message ?? "Request failed",
      response.status
    );
  }

  return data as T;
}

export const api = {
  signup: (body: { name: string; email: string; password: string }) =>
    request<SignupResponse>("/auth/signup", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  login: (body: { email: string; password: string }) =>
    request<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  me: (token: string) =>
    request<MeResponse>("/auth/me", { method: "GET" }, token),

  getProjects: (token: string) =>
    request<ProjectsResponse>("/projects", { method: "GET" }, token),

  createProject: (
    token: string,
    body: { title: string; description: string }
  ) =>
    request<ProjectResponse>(
      "/projects",
      { method: "POST", body: JSON.stringify(body) },
      token
    ),
};
