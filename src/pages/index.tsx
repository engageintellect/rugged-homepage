// IMPORTS
import { type NextPage } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
// import Link from "next/link";

// COMPONENTS
import Head from "next/head";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import CardStack from "../components/CardStack";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import HeroCards from "../components/HeroCards";
import CallToAction from "../components/CallToAction";
import TwitterFeed from "../components/TwitterFeed";
import Testing from "../components/Testing";
import Industries from "../components/Industries";




const Home: NextPage = (props) => {
  const trpcMessage = trpc.api.alert.useQuery(
		{
			title: "Alert:",
			msg: "This is an alert, driven by tRPC.",
		}

	);

  return (
    <>
      <Head>
        <title>Rugged Development</title>
        <meta name="description" content="Generated by T3D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="bg-neutral-800">
				<Alert 
          title={trpcMessage.data?.title ?? 'loading...'} 
          msg={trpcMessage.data?.msg} 
        />
				<Navbar />
        <Hero
          title="Titlei"
          description="We supply, deploy, and support innovative technology
that will optimize efficiency and increase profitability."
        />
				<HeroCards/>
				<TeamSection/>
      </div>
			<CardStack />
      <Industries/>
      <Partners/>
      <TwitterFeed/>
      <CallToAction/>
			<Footer />
    </>
  );
};

export default Home;


