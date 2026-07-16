/* STREAMING_CHUNK:Updating JournalSection to hide sticker on mobile... */
import React from 'react';
import Image from 'next/image';

const POSTS = [
  {
    id: 1,
    title: 'How to Build a Climate-Ready Data Stack',
    category: 'Insights',
    time: '4 min',
    image: '/images/blogimg1.png',
  },
  {
    id: 2,
    title: "Sustainability isn't a Side Project: Making Impact Operational",
    category: 'Strategy',
    time: '7 min',
    image: '/images/blogimg2.png',
  },
  {
    id: 3,
    title: 'Inside the Aetherfield Model: How We Turn Data Into Action',
    category: 'Insights',
    time: '5 min',
    image: '/images/blogimg3.png',
  },
];

export default function JournalSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Responsive Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 mb-16">
          {/* Sticker container: 'hidden md:block' ensures it is hidden on mobile and visible on desktop */}
          <div className="hidden md:block w-60 h-60 flex-shrink-0 relative">
            <Image 
              src="/images/sticker-container.png"
              alt="Aetherfield Journal Sticker"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center md:text-left">
            From the journal
          </h2>
        </div>

        {/* Blog List */}
        <div className="space-y-8 mb-12">
          {POSTS.map((post) => (
            <div key={post.id} className="flex gap-6 items-center border-b border-slate-100 pb-8 last:border-0 last:pb-0 group hover:opacity-80 transition-opacity">
              <div className="w-32 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={128}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{post.title}</h3>
                <p className="text-sm text-slate-500">{post.category} • {post.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-slate-900 text-white px-8 py-3 font-semibold hover:bg-slate-800 transition-colors">
          View all articles
        </button>
      </div>
    </section>
  );
}
