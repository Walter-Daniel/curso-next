import { Outlet } from "react-router-dom"
import { Navbar } from "../shared/navbar"
import { Footer } from "../shared/Footer"

export const LayoutPrincipal = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
