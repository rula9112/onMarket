import Link from "next/link";
import { UserRoundX } from "lucide-react";

export default function UserNotExisting(){
    return(
        <div className="flex min-h-[60vh] items-center justify-center rounded-3xl border border-olive-100 bg-white px-5 py-12 shadow-sm sm:px-8">
            <div className="w-full max-w-md text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-orange-100 bg-orange-50 text-orange-700 shadow-sm ring-8 ring-olive-50">
                    <UserRoundX className="h-9 w-9" strokeWidth={1.7} />
                </div>
                <h1 className="text-2xl font-bold text-olive-950 sm:text-3xl">
                    سجّل الدخول لعرض حسابك
                </h1>
                <p className="mt-3 text-sm leading-7 text-olive-600 sm:text-base">
                    سجّل الدخول أولًا للوصول إلى معلوماتك وطلباتك وقائمة المفضلة.
                </p>
                <div className="mt-8">
                    <Link
                        href="/login"
                        className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
                    >
                        تسجيل الدخول
                    </Link>
                </div>
            </div>
        </div>
    )
}