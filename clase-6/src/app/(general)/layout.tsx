import { NavbarComponent, Hero } from "@/components";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
          <div className="dark text-foreground bg-background">
          <NavbarComponent/>
          <Hero />
          {children}
          </div>
      </div>
  );
}
