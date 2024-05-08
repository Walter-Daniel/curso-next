"use client";

import Link from "next/link";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/validations/user-schema";
import { Inputs } from "@/types/auth";
import { FormAuth, ButtonForm } from "@/components";
import { FcAdvance } from "react-icons/fc";
// import logo from "../../../public/logo.png";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(signInSchema),
  });

  const handleGoogleSignIn = async () => {
    console.log("Signin with google");
  };

  const handleSignIn = async (email: string, password: string) => {
    console.log(email, password);
  };

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await handleSignIn(email, password);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in"
    >
      <div className="flex justify-end mb-5">
        {/* <Image
          src={logo}
          alt="Logo"
          sizes="50px"
          style={{ width: "100%", height: "50px", objectFit: "contain" }}
        /> */}
        <h2>Login</h2>
      </div>
      <FormAuth register={register} errors={errors} />
      {/* BUTTONS */}
      <ButtonForm handleGoogleSignIn={handleGoogleSignIn} title="Sign in" />
      <div className="flex gap-2 pt-3">
        <p className="text-sm">Don't have an account?</p>
        <Link href={"/register"} className="underline text-red-500 text-sm">
          Sign up
        </Link>
      </div>
      <div className="flex gap-2 pt-3 justify-end items-center">
        <FcAdvance />
        <Link href={"/"} className="text-black text-sm">
          Go home
        </Link>
      </div>
    </form>
  );
}
