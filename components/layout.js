import { Navbar } from "./navbar";
import Head from "next/head";
import { Footer } from "./footer";
import { motion } from "framer-motion";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="content">
        {children}
        <Footer />
      </main>
    </>
  );
}
