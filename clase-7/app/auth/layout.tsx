export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url('../public/bg-auth.png')]  h-screen flex justify-center items-center bg-cover bg-no-repeat">
      {children}
    </div>
  );
}
