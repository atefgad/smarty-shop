import { motion } from "framer-motion";
import React from "react";
import { NavBar, Topbar } from "../../../Components";

export default function Header() {
  return (
    <motion.header className="header" layout transition={{ duration: 0.3 }}>
      <Topbar />
      <NavBar />
    </motion.header>
  );
}
