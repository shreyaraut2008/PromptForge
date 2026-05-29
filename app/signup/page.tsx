import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start building with PromptForge today"
    >
      <SignupForm />
    </AuthLayout>
  );
}
