import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { Roboto } from "@next/font/google";

import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testing from "../components/Testing";

import Script from "next/script";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const trpcMessage = trpc.api.alert.useQuery({
    title: "Rugged Financing:",
    msg: "Financing now available for all products.",
  });
  return (
    <>
      <Script src="https://zi.my.salesforce.com/sfc/p/1U0000019dCp/a/Do0000004Hf4/TBw4oL0eD1dQExQ5YXVJqMD0IpJoPKyFocXHPuXkhnI" />

      <main className={roboto.className}>
        <Alert
          title={trpcMessage.data?.title ?? "loading..."}
          msg={trpcMessage.data?.msg}
          url={trpcMessage.data?.url}
        />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        {/* <Testing /> */}
      </main>
    </>
  );
};

export default trpc.withTRPC(MyApp);
