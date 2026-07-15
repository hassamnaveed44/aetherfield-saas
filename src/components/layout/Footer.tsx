/* STREAMING_CHUNK:Reducing footer vertical height... */
import React from 'react';
import Image from 'next/image';

const NAV_LINKS = ['Product', 'Journal', 'About', 'Careers', 'Get started'];

export default function Footer() {
  return (
    <footer className="w-full bg-yellow-300 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Top Navigation Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <nav className="flex flex-wrap gap-4 text-xs md:text-sm font-medium text-slate-900">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="hover:underline underline-offset-4">
                {link}
              </a>
            ))}
          </nav>
          <p className="text-xs text-slate-900 opacity-80">
            © 2025 - All rights reserved
          </p>
        </div>

        {/* Featured Image Area: Reduced height */}
        <div className="w-full relative overflow-hidden rounded-md h-[150px] md:h-[200px]">
          <Image 
            src="/images/footerimg.jpg" 
            alt="Aetherfield Texture" 
            fill
            className="object-cover mix-blend-multiply opacity-90"
          />
        </div>

        {/* Main Branding Text: Slightly reduced spacing */}
        <div className="w-full overflow-hidden">
          <h1 className="text-[10vw] font-bold leading-none text-slate-900 tracking-tighter">
            Aetherfield
          </h1>
        </div>
      </div>
    </footer>
  );
}
