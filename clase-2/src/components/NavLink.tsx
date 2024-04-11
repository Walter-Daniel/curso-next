import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinksProps {
    url: string;
    title: string;
}

export const NavLink = ({ url, title }: LinksProps) => {
    const pathName = usePathname();
    const isActive = pathName === url;

    return (
        <div className={`rounded p-1 ${isActive ? "bg-black text-white" : ""}`}>
            <Link href={url} passHref>
                <span>{title}</span>
            </Link>
        </div>
    );
};
