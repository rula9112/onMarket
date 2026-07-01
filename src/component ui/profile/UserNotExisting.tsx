import Link from "next/link";
import { Button } from "../ui/Button";

export default function UserNotExisting(){
    return(
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-white rounded-3xl">
            <div className="max-w-md w-full text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-around rounded-full bg-orange-100">

                </div>
                <h1 className="text-3xl font-bold text-zinc-900">
                    User Dose not Exist
                </h1>
                <p className="mt-3 text-zinc-500 leading-relaxed">

            Please Signin first

                </p>
                <div className="mt-8">
                    <Button variant="primary">
                           <Link href="/login">
                    Login
                    </Link>
                    </Button>
                 
                </div>
            </div>
        </div>
    )
}