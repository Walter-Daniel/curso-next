"use client";

import Link from "next/link";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/validations/user-schema";
import { Inputs } from "@/types/auth";
import { FormAuth, ButtonForm, Title } from "@/components";
import { FcAdvance } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { getAuth } from "@/lib/firebase-utils";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();

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
    const isSignUp = false;
    await getAuth({email, password, router, isSignUp} )
    reset()
  };

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await handleSignIn(email, password);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in"
    >
      <div className="flex justify-end mb-5">
        <Title size="4xl">
          Purple.dev
        </Title>
      </div>
      <FormAuth register={register} errors={errors} />
      {/* BUTTONS */}
      <ButtonForm handleGoogleSignIn={handleGoogleSignIn} title="Sign in" />
      <div className="flex gap-2 pt-3">
        <p className="text-sm">No tienes una cuenta?</p>
        <Link href={"/auth/register"} className="underline text-sm">
          Registrate
        </Link>
      </div>
      <div className="flex gap-2 pt-3 justify-end items-center">
        <FaHome />
        <Link href={'/'} className="text-black text-sm">
        Regresar al inicio
        </Link>
      </div>
    </form>
  );
}
