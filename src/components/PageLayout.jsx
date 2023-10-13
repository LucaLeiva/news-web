import React from "react";
import Head from 'next/head'
import { NavBar } from "./NavBar";


export default function PageLayout({ children, title }) {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700">
      
      <Head>
        <title>{ title }</title>
        <meta name="description" content="newsweb - the best app to read news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar />

      <main>
        { children }
      </main>

    </div>
  );
}