import { NavbarComponent, Hero } from "@/components";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
          <NavbarComponent/>
          <Hero />
          {children}
      </div>
  );
}
