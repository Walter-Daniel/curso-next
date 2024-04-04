import { createBrowserRouter } from "react-router-dom";
import { 
    AboutPage,
    AsteroidsPage,
    ContactPage,
    ErrorPage,
    Exoplanets,
    HomePage,
    LoginPage,
    RegisterPage } from "../pages";
import { LayoutPrincipal } from "../layout/LayoutPrincipal";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/",
    element: <LayoutPrincipal />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "asteroids",
        element: <AsteroidsPage />
      },
      {
        path: "exoplanets",
        element: <Exoplanets />
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
