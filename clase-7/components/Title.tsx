import { Titan_One } from "next/font/google";


const titan = Titan_One({weight:"400", subsets: ["latin"] });

interface TitleProps {
    children: string;
    size?: '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    color?: string;
}

export const Title = ({children, size, color}: TitleProps) => {
    const titleClass = `${titan.className} text-${size} text-${color}`
  return (
    <div className={`${titleClass}`}>{children}</div>
  )
}
