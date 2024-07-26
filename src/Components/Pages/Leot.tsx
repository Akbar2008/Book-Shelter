import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Leot = () => {
  return (
      <>
          <Header />
          <Outlet/>
      </>
  )
}
