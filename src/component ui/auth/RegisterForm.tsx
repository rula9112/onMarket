
'use client';
import AuthInput from "@/src/component ui/auth/AuthInput";
import AuthLayout from "@/src/component ui/auth/AuthLayout";
import { Button } from "@/src/component ui/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "@/src/lib/store/hooks";
import {  registerUser } from "@/src/features/auth/authAction";

export default function RegisterForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("كلمة المرور غير متطابقة");
      return;
    }

    const resultAction = await dispatch(
      registerUser({ 
        username: formData.username, 
        password: formData.password, 
        email: formData.email 
      })
    );

    if (registerUser.fulfilled.match(resultAction)) {
      router.push("/");
    } else {
      const errorMessage: string = (resultAction.payload as { message?: string })?.message || "فشل تسجيل انشاء الحساب";
      alert(errorMessage);
    }
  };

  return (
    <AuthLayout
      title="Creat An Account"
      subtitle="Create an Account an Start the Shopping Now "
    >
      <form className="space-y-3 px-8" onSubmit={handleRegister}>
        
        <AuthInput 
          type="text" 
          name="username"
          label="User name" 
          placeholder="User Name" 
          value={formData.username}
          onChange={handleChange} 
        />

        <AuthInput 
          type="email" 
          name="email"
          label="Email" 
          placeholder="Exaple@123.com" 
          value={formData.email}
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
        
        <AuthInput 
          type="password" 
          name="confirmPassword"
          label="Confirm Password" 
          placeholder="********" 
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Terms */}
        <label className="flex items-start gap-3 text-sm text-zinc-600 my-8">
          <input type="checkbox" className="mt-1" />
          <span>أوافق على الشروط والأحكام وسياسة الخصوصية</span>
        </label>

        {/* Submit */}
        <Button variant="primary" className="w-full">
          Register
        </Button>

        {/* Login */}
        <p className="pt-3  text-center text-sm text-zinc-500">
          Do you Have an Account already ?
          <Link className="text-black font-semibold cursor-pointer px-2" href={'/login'}>
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}