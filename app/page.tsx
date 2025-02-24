// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to My Component Library</h1>
      <div className="space-x-4">
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password
        </Link>
      </div>
    </div>
  );
}
