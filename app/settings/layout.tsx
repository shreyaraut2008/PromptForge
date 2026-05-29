import { AuthGuard } from "@/components/shared/AuthGuard";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
