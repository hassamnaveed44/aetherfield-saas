import React from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Stylized Image Container */}
        <div className="relative w-full max-w-[320px] mx-auto md:mx-0">
          {/* White halo/sticker backing, offset behind the photo */}
          <div className="absolute inset-0 bg-white rounded-3xl scale-105 -z-10 shadow-md" />

          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src="/images/testimonialimg.jpg"
              alt="Eliot Williams"
              fill
              className="object-cover"
              style={{
                filter:
                  'grayscale(1) sepia(1) hue-rotate(180deg) saturate(4) brightness(1.05) contrast(1.1)',
              }}
            />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col gap-6">
          <div className="text-blue-300 text-6xl font-serif leading-none">&ldquo;</div>

          <h2 className="text-3xl md:text-4xl font-normal text-slate-900 leading-tight">
            We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.
          </h2>
          <div className="mt-4">
            <p className="font-bold text-slate-900 text-lg">Eliot Williams</p>
            <p className="text-slate-500">Head of Sustainability, Flux Materials</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto text-center mt-24 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Ready to operationalize your sustainability goals?
        </h2>
        <button className="bg-slate-900 text-white px-8 py-3 font-semibold hover:bg-slate-800 transition-colors">
          Request a demo
        </button>
      </div>
    </section>
  );
}