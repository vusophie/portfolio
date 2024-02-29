// pages/page.tsx
import React from 'react';
import AboutSection from "../app/components/AboutSection";
import HeroSection from "../app/components/HeroSection";
import { Navbar } from "../app/components/Navbar";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
};

export default Page;