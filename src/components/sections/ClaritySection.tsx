import React from 'react';

// Icon components based on your screenshot
const Icon1 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M12 12h10" />
  </svg>
);

const Icon2 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 22v-2M2 12h2M22 12h-2" />
  </svg>
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
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for clarity<br />
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