import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Content from "./Content";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-row justify-start gap-4">
        <Sidebar />
        <div className="content my-3 mx-1 overflow-x-hidden">
          <Content>{children}</Content>
        </div>
      </div>
    </>
  );
};
