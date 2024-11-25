import Footer from "./footer";
import { NavBar } from "./navBar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}