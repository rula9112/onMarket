import { Button } from "@/src/component ui/ui/Button";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 bg-white rounded-3xl">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <span className="text-4xl">📄</span>
        </div>

        <h1 className="text-3xl font-bold text-zinc-900">
          404 - Page Not Found
        </h1>

        <p className="mt-3 text-zinc-500 leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8">
          <Button variant="primary">
            <Link href="/">
              Go to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}