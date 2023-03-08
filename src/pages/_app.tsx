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
      <Script id="zoom-info" strategy="afterInteractive">
        {`<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="Refresh" content="0; URL=https://zi.my.salesforce.com/sfc/p/1U0000019dCp/a/Do0000004Hf4/TBw4oL0eD1dQExQ5YXVJqMD0IpJoPKyFocXHPuXkhnI"></head><body><div>Attachment not opening? Click this link: <a href="https://zi.my.salesforce.com/sfc/p/1U0000019dCp/a/Do0000004Hf4/TBw4oL0eD1dQExQ5YXVJqMD0IpJoPKyFocXHPuXkhnI">websights-implementation-guide.pdf</a></div></html>`}
      </Script>

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
