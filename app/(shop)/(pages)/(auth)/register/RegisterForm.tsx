"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import FormWrapper from "@/app/(shop)/_components/ui/FormWrapper";
import Input from "@/app/(shop)/_components/ui/Input";
import { registerSchema } from "@/app/shared/schemas/userSchemas";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    console.log(data, errors);

    axios
      .post("/api/register", data)
      .then(() => {})
      .catch(() => {
        toast.error("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FormWrapper>
      <h2 className="text-2xl font-bold">Sign up</h2>
      <button
        className={`
            flex
            items-center
            justify-center
            gap-2
            w-full
            text-black
            font-semibold
            py-3
            bg-white
            rounded-lg
            border-2
            border-black
            transition
            duration-150
            hover:opacity-80
            `}
      >
        <FcGoogle size={24} />
        <span>Continue with Google</span>
      </button>

      <hr className="bg-slate-300 h-px w-full" />
      <Input
        register={register}
        errors={errors}
        label="Name"
        id="name"
        required
        disabled={isLoading}
      />
      <Input
        register={register}
        errors={errors}
        label="Email"
        id="email"
        required
        disabled={isLoading}
      />
      <Input
        register={register}
        errors={errors}
        label="Password"
        id="password"
        required
        disabled={isLoading}
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className={`
            w-full
            p-4
            mt-4
            text-white
            bg-black
            rounded-md
            transition
            duration-150
            hover:bg-opacity-90
            disabled:opacity-70
            disabled:cursor-not-allowed
            `}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Sign up"}
      </button>
      <p className="text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </FormWrapper>
  );
};

export default RegisterForm;
