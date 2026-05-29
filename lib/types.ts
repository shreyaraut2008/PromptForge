export interface User {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface MeResponse {
  success: boolean;
  user: User;
}

export interface ProjectsResponse {
  success: boolean;
  projects: Project[];
}

export interface ProjectResponse {
  success: boolean;
  project: Project;
}

export interface SignupResponse {
  success: boolean;
  user: User;
}

export interface ApiErrorResponse {
  message: string;
}
