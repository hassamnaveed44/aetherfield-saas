'use client';

import React from 'react';
import Image from 'next/image';

/**
 * HeroSection Component
 * Gradient background, serif headline (two lines, two font weights),
 * dual CTAs (identical styling + bullet marker on both), and a single
 * dashboard preview image (no coded stat tiles).
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
        {/* Two-weight heading, matching the screenshot exactly:
            line 1 "Sustainability insights," is regular weight,
            line 2 "built for business" is bold. Each line is its own
            block span so the weights don't blend on one <h1> tag. */}
        <h1 className="font-serif text-4xl sm:text-[80px] text-slate-900 tracking-tight leading-tight sm:leading-[1]">
          <span className="block font-normal">Sustainability insights,</span>
          <span className="block font-bold">built for business</span>
        </h1>

        {/* text-[20px]/leading-[1.2] — matches Figma's Paragraph 2 style
            (20/120 = 20px font-size, 120% line-height) at every screen
            size, rather than scaling up to text-2xl (24px) on desktop. */}
        <p className="text-[20px] leading-[1.2] text-slate-600 max-w-2xl mx-auto">
          Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
        </p>

        {/* Buttons — both solid dark, IDENTICAL styling and a small bullet
            marker (not an icon) before each label. Text spec pulled
            directly from Figma's CSS panel: font-family: 'Geist Mono',
            font-weight: 500, font-size: 14px, line-height: 100%,
            color: #FFFFFF. */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 hover:bg-slate-800 transition-all shadow-lg font-mono font-medium text-sm leading-none">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
            Request a demo
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 hover:bg-slate-800 transition-all shadow-lg font-mono font-medium text-sm leading-none">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
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