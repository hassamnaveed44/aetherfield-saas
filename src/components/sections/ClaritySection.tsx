import React from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

// Loaded right here, scoped to this file only — no changes needed to
// layout.tsx or tailwind.config. `playfair.className` can then be applied
// to just the two heading lines below, leaving every other heading on the
// site (Our values, article titles, etc.) untouched.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

// Icon components based on your screenshot
const Icon1 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M12 12h10" />
  </svg>
);

// CHANGED: was an inline SVG (circle + crosshair) — now the real icon
// asset from Figma, matching the globe/grid icon in the screenshot.
const Icon2 = () => (
  <Image
    src="/images/icon2.png"
    alt=""
    width={24}
    height={24}
    className="h-6 w-6 object-contain"
  />
);

const Icon3 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8l-8 8" />
    <path d="M16 12V8h-4" />
  </svg>
);

const VALUES = [
  {
    title: 'Clarity drives action',
    description: 'We believe better decisions start with better data—measured, visible, and trusted.',
    icon: <Icon1 />,
  },
  {
    title: 'Sustainability is a systems problem',
    description: 'We build tools that help teams connect the dots between operations, impact, and accountability.',
    icon: <Icon2 />,
  },
  {
    title: 'Progress over perfection',
    description: 'We support real-world momentum—helping organizations move from ambition to measurable change.',
    icon: <Icon3 />,
  },
];

export default function ValueProposition() {
  return (
    <section
      className="w-full py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/clear.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading — only these two lines get the Playfair Display
            font via playfair.className; everything else in this file (and
            the rest of the site) stays on the regular sans font. */}
        <div className={`${playfair.className} text-center mb-16`}>
          <h2 className="text-3xl md:text-5xl font-normal text-slate-900 tracking-tight">
            Built for clarity
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Designed for action
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {VALUES.map((value, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm"
            >
              <div className="text-slate-900 mb-6">
                 {value.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}