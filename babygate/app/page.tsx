'use client';

import Link from 'next/link';

export default function Home() {
  const reviews = [
    {
      text: "Changed my life as an apartment parent. I can finally let my daughter play safely while I make dinner.",
      author: "Sarah M.",
      location: "Brooklyn, NY",
    },
    {
      text: "The design is beautiful AND functional. It looks like intentional furniture, not a plastic barrier.",
      author: "Marcus T.",
      location: "Austin, TX",
    },
    {
      text: "I travel with it constantly. Best investment for peace of mind I've ever made.",
      author: "Elena R.",
      location: "San Francisco, CA",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Peace of Mind
              <br />
              <span style={{ color: 'var(--sage)' }}>for Every Space</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Beautifully designed play gates that bring calm to chaos. For parents who refuse to compromise on style or safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="btn btn-primary text-center">
                Shop Now
              </Link>
              <Link href="/about" className="btn btn-secondary text-center">
                Learn Our Story
              </Link>
            </div>
          </div>
          <div className="bg-light-gray rounded-lg aspect-square flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 mb-4">Product Lifestyle Photo</p>
              <p className="text-sm text-gray-400">[Placeholder for stunning apartment setup photo]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">The Anxiety</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span style={{ color: 'var(--terracotta)' }} className="text-2xl">•</span>
                  <p className="text-gray-700">Small apartments with nowhere safe to set your child down</p>
                </li>
                <li className="flex gap-4">
                  <span style={{ color: 'var(--terracotta)' }} className="text-2xl">•</span>
                  <p className="text-gray-700">Generic plastic gates that scream nursery, not home</p>
                </li>
                <li className="flex gap-4">
                  <span style={{ color: 'var(--terracotta)' }} className="text-2xl">•</span>
                  <p className="text-gray-700">Needing safety without sacrificing your aesthetic</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">The Solution</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span style={{ color: 'var(--sage)' }} className="text-2xl">✓</span>
                  <p className="text-gray-700">Premium materials designed for adult spaces</p>
                </li>
                <li className="flex gap-4">
                  <span style={{ color: 'var(--sage)' }} className="text-2xl">✓</span>
                  <p className="text-gray-700">Intentional engineering that feels like furniture</p>
                </li>
                <li className="flex gap-4">
                  <span style={{ color: 'var(--sage)' }} className="text-2xl">✓</span>
                  <p className="text-gray-700">Colors and finishes that complement modern homes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black mb-16 text-center">
          Engineered for Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-light-gray rounded-lg p-8 mb-6 aspect-square flex items-center justify-center">
              <p className="text-gray-500">Premium Sage Fabric</p>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Premium Materials</h3>
            <p className="text-gray-700">
              Durable sage and eucalyptus fabrics designed to last through years of use.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-light-gray rounded-lg p-8 mb-6 aspect-square flex items-center justify-center">
              <p className="text-gray-500">Reinforced Edging</p>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Reinforced Design</h3>
            <p className="text-gray-700">
              Floral reinforcement edging combines aesthetic appeal with structural integrity.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-light-gray rounded-lg p-8 mb-6 aspect-square flex items-center justify-center">
              <p className="text-gray-500">Safety Hardware</p>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Safety First</h3>
            <p className="text-gray-700">
              Black bungee system provides secure, silent setup and adjusts to any space.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            See It In Action
          </h2>
          <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Video Player</p>
              <p className="text-sm text-gray-500">
                [Placeholder for product demo or testimonial video]
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            Real parents, real apartments, real peace of mind
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">
          Loved by Urban Parents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-8">
              <p className="text-gray-700 mb-6 italic">\"{ review.text}\"</p>
              <div>
                <p className="font-semibold text-black">{review.author}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Create Your Peaceful Space?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join hundreds of parents who've chosen design and safety.
          </p>
          <Link href="/shop" className="btn btn-primary text-center inline-block">
            Shop Peaceful PlayGate
          </Link>
        </div>
      </section>
    </div>
  );
}