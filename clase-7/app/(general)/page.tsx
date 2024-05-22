import { NavbarComponent, ListMovies } from "@/components";

export default async function Home() {
  
  return (
    <div className="bg-[#6daca5] min-h-screen">
      <NavbarComponent />
      <h1 className="text-center text-3xl font-bold uppercase py-4">Ghibli Films</h1>
      <ListMovies />
    </div>
  );
}
