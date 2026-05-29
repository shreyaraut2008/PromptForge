import { AuthGuard } from "@/components/shared/AuthGuard";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
