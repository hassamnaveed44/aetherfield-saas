import React from 'react';

const FEATURES = [
  {
    title: 'Track',
    description: 'Emissions, energy, and waste across your value chain',
  },
  {
    title: 'Model',
    description: 'Forecast performance and goal alignment',
  },
  {
    title: 'Report',
    description: 'Generate ESG disclosures, automate frameworks',
  },
  {
    title: 'Act',
    description: 'Surface insights and operational next steps',
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading — matches Figma's "Header 4 · 40/100" spec:
            40px font-size, 100% line-height, bold (not extrabold). The
            previous text-3xl/md:text-5xl + extrabold + leading-tight
            combination was what read as "too different from Figma". */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2
            className="text-3xl sm:text-[40px] font-bold text-slate-900 leading-tight sm:leading-[1]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Everything you need to measure, model, and act on sustainability
          </h2>
        </div>

        {/* Layout Grid: Image Left, List Right.
            items-stretch (not items-center) + h-full on the image wrapper
            (instead of a fixed aspect-[4/3]) so the image's height always
            matches the list column's actual height, whatever that turns
            out to be — previously the image kept its own ratio regardless
            of how tall the list got, so the two columns' bottoms didn't
            line up. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Image Side */}
          <div className="relative w-full h-full min-h-[320px] rounded-3xl overflow-hidden bg-slate-100 shadow-lg">
            <img 
              src="/images/featuresection.jpg" 
              alt="Sustainability Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* List Side */}
          <div className="flex flex-col gap-8">
            <div className="space-y-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button: Updated for responsiveness */}
            <div className="pt-4">
              <button className="w-full lg:w-fit bg-slate-900 text-white px-8 py-3 font-semibold hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center gap-2">
                <span>•</span> Explore features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}