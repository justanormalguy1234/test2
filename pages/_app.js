import "../styles/globals.css";
import Layout from "../components/layout";
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
