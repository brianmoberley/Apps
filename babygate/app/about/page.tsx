'use client';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
          Our Story
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Peaceful PlayGate was born from frustration, love, and a refusal to accept that safety gates had to be ugly.
        </p>
      </section>

      {/* Main Story Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">The Beginning</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Like many new parents in dense cities, we found ourselves trapped between impossible choices.
                We needed a way to create a safe space for our child in a small apartment, but every safety gate
                on the market looked like it belonged in a daycare, not in our home. They were bulky, plastic,
                and clashed with everything we'd carefully designed.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black mb-4">The Turning Point</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We realized we weren't alone. Hundreds of parents we talked to felt the same way—they wanted
                real safety without sacrificing their aesthetic. They wanted something that looked intentional,
                designed, and premium. So we stopped compromising and started designing.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black mb-4">What We Built</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Peaceful PlayGate is the result of obsessive attention to detail. Every color was chosen to evoke
                calm—sage and eucalyptus tones that exist in nature and interior design, not just nurseries.
                The reinforcement edging isn't decoration; it's structural engineering that happens to be beautiful.
                The bungee system is silent and adjustable, because you need this to be invisible in your home
                until it needs to be a barrier.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We wanted to build something that parents could actually be proud to display. Something that
                transforms the anxiety of \"How do I keep my kid safe?\" into \"I have this beautiful, intentional
                system in place.\"
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To bring peace to anxious parents by creating thoughtfully designed safety products that belong
                in modern homes. We believe that good design and safety aren't opposing forces—they're a unified
                vision for how parents should live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ color: 'var(--sage)' }}>
              Design Integrity
            </h3>
            <p className="text-gray-700">
              Every choice we make is intentional. We don't add features for features' sake.
              We design for beauty and function equally.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ color: 'var(--sage)' }}>
              Safety First
            </h3>
            <p className="text-gray-700">
              Premium materials, rigorous testing, and obsessive attention to durability
              ensure your child is always protected.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ color: 'var(--sage)' }}>
              Parent-Centered
            </h3>
            <p className="text-gray-700">
              We design for real life: small spaces, travel, style-conscious homes, and the
              anxiety that comes with modern parenthood.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4" style={{ color: 'var(--sage)' }}>
              Transparency
            </h3>
            <p className="text-gray-700">
              We tell you exactly what our products are made of, how they're tested,
              and why we made each design choice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Join Our Community of Peaceful Parents
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience the peace that comes with thoughtful design and genuine safety.
          </p>
          <a href="/shop" className="btn btn-primary inline-block">
            Shop Peaceful PlayGate
          </a>
        </div>
      </section>
    </div>
  );
}