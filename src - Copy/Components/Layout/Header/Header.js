import React from "react";
import NavBar from "./NavBar";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="header">
      <Topbar />
      <NavBar />
    </header>
  );
}
