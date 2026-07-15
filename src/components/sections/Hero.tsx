'use client';

import React from 'react';
import Image from 'next/image';

/**
 * HeroSection Component
 * Proportions adjusted to match Figma:
 * Container: 1280px, Text: 1030px, Card: 960px
 */
export default function HeroSection() {
  return (
    <section className="relative object-cover flex flex-col items-center justify-center overflow-hidden bg-sky-50 py-16 px-6 min-h-[1074px]">
      {/* Background Image Layer */}
      <div className="absolute  inset-0 z-0 opacity-20 ">
        <Image
          src="/images/bg-img.jpg"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Container: Max width 1030px */}
      <div className="max-w-[1030px] w-full text-center space-y-6 relative z-10 mx-auto">
        <h1 className="text-2xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.1]">
          Sustainability insights, <br className="hidden md:block" /> built for business
        </h1>
        <p className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto">
          Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="bg-slate-900 text-white px-8 py-4  font-semibold hover:bg-slate-800 transition-all shadow-lg text-lg">
            Request a demo
          </button>
          <button className="bg-slate-900 text-white px-8 py-4 font-semibold border border-slate-200 hover:bg-slate-800 transition-all text-lg">
            Explore the platform
          </button>
        </div>
      </div>

      {/* Dashboard Preview Card: Max width 960px */}
      <div className="mt-20 max-w-[960px] w-full relative z-10 px-2">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 min-h-[608px]">
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-slate-900">Good morning, Acme Inc</h3>
            <p className="text-slate-500 text-lg">Your daily impact metrics are ready to review.</p>
          </div>

          {/* Metrics Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-12">
            <div className="flex-1 space-y-2">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Emission reduction</p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-slate-900">56%</span>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Energy consumption</p>
              <span className="text-5xl font-bold text-slate-900">583.7 <span className="text-2xl text-slate-400 font-medium">kWh</span></span>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full md:w-80">
              <p className="text-sm font-semibold text-slate-900">Target 2027</p>
              <p className="text-sm text-slate-500">You re 16% off your 2027 emissions goal</p>
            </div>
          </div>

          {/* Graph Image Display */}
          <div className="w-full h-auto bg-white rounded-xl border border-slate-100 overflow-hidden">
             <Image 
               src="/images/image.png" 
               alt="Impact Analytics Graph" 
               width={900}
               height={300}
               className="w-full h-auto object-contain"
             />
          </div>
        </div>
      </div>
    </section>
  );
}