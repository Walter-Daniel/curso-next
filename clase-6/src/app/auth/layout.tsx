import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <div className="h-screen">
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}