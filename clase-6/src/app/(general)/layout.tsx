import { NavbarComponent } from "../components";
import { Hero } from "../components/Hero";


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
