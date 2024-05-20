import { auth, signOut } from "@/auth";
import { ListMovies } from "@/components/ListMovies";
import { Button } from "@nextui-org/react";


export default async function Home() {
  
  const session = await auth();

  return (
    <div>
      <nav className="flex justify-between font-semibold px-5 pt-2">
          <h1 className="2xl">Purple.dev</h1>
          <form action={async() => {
            "use server"
            await signOut();
          }}>
              <Button type='submit'>
                logout
              </Button>
            </form>
      </nav>
      <ListMovies />
    </div>
  );
}
