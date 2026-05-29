"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import { api } from "@/lib/api";
import { getToken, removeToken, setToken } from "@/lib/auth";
import type { User } from "@/lib/types";

interface AuthContextValue {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const refreshUser = useCallback(async () => {
    const storedToken = getToken();
    if (!storedToken) {
      setUser(null);
      setTokenState(null);
      return;
    }

    try {
      const data = await api.me(storedToken);
      setUser(data.user);
      setTokenState(storedToken);
    } catch {
      removeToken();
      setUser(null);
      setTokenState(null);
    }
  }, []);

  useEffect(() => {
    refreshUser().finally(() => setLoading(false));
  }, [refreshUser]);

  const login = useCallback(
    async (email: string, password: string) => {
      const data = await api.login({ email, password });
      setToken(data.token);
      setTokenState(data.token);
      setUser(data.user);
    },
    []
  );

  const signup = useCallback(
    async (name: string, email: string, password: string) => {
      await api.signup({ name, email, password });
      await login(email, password);
    },
    [login]
  );

  const logout = useCallback(() => {
    removeToken();
    setUser(null);
    setTokenState(null);
    router.push("/login");
  }, [router]);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      login,
      signup,
      logout,
      refreshUser,
    }),
    [user, token, loading, login, signup, logout, refreshUser]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
