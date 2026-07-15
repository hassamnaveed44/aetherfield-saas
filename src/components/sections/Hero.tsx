'use client';

import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

/**
 * HeroSection Component
 * Gradient background, serif headline, dual CTAs,
 * and a single dashboard preview image (no coded stat tiles).
 */

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden py-16 px-6 min-h-[1074px]"
      style={{
        background:
          'linear-gradient(180deg, #DCEBFF 0%, #EAF1F7 35%, #FBF3E4 70%, #F9EBD9 100%)',
      }}
    >
      {/* Text Container */}
      <div className="max-w-[1030px] w-full text-center space-y-6 relative z-10 mx-auto">
        <h1 className="font-serif text-4xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.1]">
          Sustainability insights, <br className="hidden md:block" /> built for business
        </h1>
        <p className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto">
          Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 font-semibold hover:bg-slate-800 transition-all shadow-lg text-lg">
            <Plus size={18} />
            Request a demo
          </button>
          <button className="bg-slate-900 text-white px-8 py-4 font-semibold border border-slate-200 hover:bg-slate-800 transition-all text-lg">
            Explore the platform
          </button>
        </div>
      </div>

      {/* Dashboard Preview — single image */}
      <div className="mt-20 max-w-[960px] w-full relative z-10">
        <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          <Image
            src="/images/image.png"
            alt="Dashboard Preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}