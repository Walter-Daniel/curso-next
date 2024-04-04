type ItemsProps = {
    title: string;
    navegation: string;
    btn: 'text' | 'outlined' | 'contained';
}

export const onlineItems:ItemsProps[] = [
    {
        title: "Home",
        navegation: "/",
        btn: "text"
    },
    {
        title: "Asteroids",
        navegation: "/asteroids",
        btn: "text"
    },
    {
        title: "Blog",
        navegation: "/blog",
        btn: "text"
    },
    {
        title: "About",
        navegation: "/about",
        btn: "text"
    },
    {
        title: "Logout",
        navegation: "/logout",
        btn: "contained"
    }
];

export const offlineItems:ItemsProps[] = [
    {
        title: "Home",
        navegation: "/",
        btn: "text"
    },
    {
        title: "Asteroids",
        navegation: "/asteroids",
        btn: "text"
    },
    {
        title: "Exoplanets",
        navegation: "/exoplanets",
        btn: "text"
    },
    {
        title: "About",
        navegation: "/about",
        btn: "text"
    },
    {
        title: "Contact",
        navegation: "/contact",
        btn: "text"
    },

];