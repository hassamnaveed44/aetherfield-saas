import React from 'react';
import Image from 'next/image';

export default function CaseStudySection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-[#F5F2ED]  overflow-hidden">
          
          {/* Image */}
          <div className="relative w-full h-64 lg:h-full min-h-[320px]">
            <Image
              src="/images/casestudyimg.jpg"
              alt="Acme Inc team"
              fill
              className="object-cover"
            />
          </div>

          {/* Text content */}
          <div className="px-6 lg:pr-16 py-8 lg:py-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Why Acme Inc chose Aetherfield
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              With fragmented data and growing reporting pressure, Acme turned
              to Aetherfield to streamline their ESG workflow. The result?
              Faster decisions, fewer spreadsheets, and 34% more coverage.
            </p>
            <button className="bg-slate-900 text-white px-6 py-3 font-semibold text-sm hover:bg-slate-800 transition-all">
              Read case study
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}