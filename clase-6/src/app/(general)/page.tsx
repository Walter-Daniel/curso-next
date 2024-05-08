import { Button } from "@nextui-org/react";
import { cookies } from "next/headers";

export default function Home() {
  
  const cookieStore = cookies();
  const cookieSearch = process.env.COOKIE_SESSION_NAME as string;

  const cookieTab = cookieStore.get(cookieSearch)?.value
  console.log(cookieTab, 'hola')
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
