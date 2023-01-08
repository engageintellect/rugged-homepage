import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { Roboto } from "@next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testing from "../components/Testing";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={roboto.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Testing />
    </main>
  );
};

export default trpc.withTRPC(MyApp);
