import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import Header from "./components/Header";
import { AlertHeroText, AlertHeroSubText, AlertBottomHeader, AlertBottomText } from "@/constant";
import Footer from "./components/Footer";

export default function AlertPage() {
  return (
    <Layout>
      <Seo templateTitle="Linkgad:Alert" />
      <main>
        <section className="min-h-screen bg-white">
          <Header />
          <div className="alert-bg px-4 h-[auto] md:h-[70vh] md:py-[40px]  md:px-[120px]">
            <div className="md:w-1/2 py-6">
              <p className="font-primary text-lg md:text-5xl text-white font-bold">{AlertHeroText}</p>
              <p className="font-primary mt-6 text-sm font-normal text-white">{AlertHeroSubText}</p>
            </div>
          </div>
          <div className="mx-4 my-[40px] p-6  md:mx-[120px]  bg-white flex flex-col items-center justify-center shadow-lg">
            <p className="font-primary text-lg md:text-2xl font-bold">{AlertBottomHeader}</p>
            <p className="font-primary mt-2 text-sm font-normal">{AlertBottomText}</p>
          </div>
          <Footer />
        </section>
      </main>
    </Layout>
  );
}
