import { Form } from "../components/kontakt-form";
import Layout from "../components/layout";
import { motion } from "framer-motion";
export default function Kontakt() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="w-full flex flex-col min-h-[80vh] items-center justify-center">
        <h1 className="text-5xl lg:text-8xl font-black uppercase text-center text-white lg:px-10 mb-2">
          Kontakt os
        </h1>
        <Form classNames="mt-12 mb-0" />
      </div>
    </motion.div>
  );
}
