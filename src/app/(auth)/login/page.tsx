import LoginForm from "@/src/component ui/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100svh-4rem)] items-center justify-center bg-olive-50 px-4 py-8 sm:px-6 sm:py-12">
      <LoginForm />
    </div>
  )
}