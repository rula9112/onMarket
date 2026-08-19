'use client';
import AuthInput from "@/src/component ui/auth/AuthInput";
import AuthLayout from "@/src/component ui/auth/AuthLayout";
import { Button } from "@/src/component ui/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks";
import { fetchUserProfile, loginUser } from "@/src/features/auth/authAction";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
 const status = useAppSelector((state) => state.auth.status); 

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();

  const resultAction = await dispatch(
    loginUser({
      username: formData.username,
      password: formData.password,
    })
  );

  if (loginUser.fulfilled.match(resultAction)) {
    const profileAction = await dispatch(fetchUserProfile());

    if (fetchUserProfile.fulfilled.match(profileAction)) {
      router.push("/");
    } else {
      console.log("Profile failed:", profileAction.payload);
    }
  } else {
    console.log("Login failed:", resultAction.payload);
    const errorMessage =
      (resultAction.payload as { message?: string })?.message || "فشل تسجيل الدخول";
    alert(errorMessage);
  }
};


  return (
    <AuthLayout
      title="Login"
      subtitle="Join us To Start the Shopping "
    >
      <form className="space-y-3 px-8" onSubmit={handleLogin}>        
        <AuthInput 
          type="text" 
          name="username"
          label="User Name" 
          placeholder="User Name" 
          value={formData.username}
          onChange={handleChange}
        />
        
        <AuthInput 
          type="password" 
          name="password"
          label="Password" 
          placeholder="********" 
          value={formData.password}
          onChange={handleChange}
        />

        {/* Submit */}
        <Button
        type="submit"
             disabled={status === "pending"}
         variant="primary" className="w-full my-3">
             {status === "pending" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path fill="currentColor" d="M12 3a9 9 0 0 1 9 9" />
                </svg>
                Loging in .
              </span>
            ) : (
            "Login"
            )}
        </Button>

        {/* Login */}
        <p className="pt-3 my-3 text-center text-sm text-zinc-500">
          Don't ypu have an Account
          <Link className="mx-2 text-black font-semibold cursor-pointer" href={'/register'}>
             Creat An Account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}