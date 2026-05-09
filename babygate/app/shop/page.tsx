'use client';

export default function Shop() {
  const products = [
    {
      id: 1,
      name: 'Peaceful PlayGate - Sage',
      price: '$299',
      description: 'Our signature sage design. Perfect for any modern home.',
      image: 'Product Image 1',
    },
    {
      id: 2,
      name: 'Peaceful PlayGate - Eucalyptus',
      price: '$299',
      description: 'Deeper green tone. Brings nature indoors.',
      image: 'Product Image 2',
    },
    {
      id: 3,
      name: 'Peaceful PlayGate - Portable Travel Kit',
      price: '$349',
      description: 'Everything you need for PlayGate on the go. Includes carry bag.',
      image: 'Product Image 3',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Shop Peaceful PlayGate
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Each gate is thoughtfully designed with premium materials and engineered for safety.
            Choose the option that fits your space and lifestyle.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Product Image Placeholder */}
              <div className="bg-light-gray rounded-lg aspect-square flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">{product.image}</p>
                  <p className="text-sm text-gray-400">[Product photo]</p>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4 flex-1">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-black">{product.price}</span>
              </div>

              {/* Shopify Buy Button Placeholder */}
              <div
                id={`shopify-buy-button-${product.id}`}
                className="mt-6 p-4 bg-light-gray rounded-lg text-center"
              >
                <p className="text-gray-500 text-sm mb-2">
                  [Shopify Buy Button will be rendered here]
                </p>
                <p className="text-xs text-gray-400">
                  Once Shopify store is connected, purchase functionality will appear
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-3">
                <span style={{ color: 'var(--sage)' }}>✓</span>
                Premium Sage Fabric
              </h3>
              <p className="text-gray-700">
                Durable, stain-resistant material in calming sage tones. Designed to last years of use.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-3">
                <span style={{ color: 'var(--sage)' }}>✓</span>
                Black Bungee System
              </h3>
              <p className="text-gray-700">
                Silent, adjustable attachment system fits openings from 24\" to 42\" wide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-3">
                <span style={{ color: 'var(--sage)' }}>✓</span>
                Reinforced Edging
              </h3>
              <p className="text-gray-700">
                Floral reinforcement at corners and edges for durability and intentional design detail.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-3">
                <span style={{ color: 'var(--sage)' }}>✓</span>
                Installation Guide
              </h3>
              <p className="text-gray-700">
                Clear, simple instructions for quick setup in any space. No tools required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Specifications</h2>
        <div className="bg-light-gray rounded-lg p-8">
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 font-semibold text-black">Materials</td>
                <td className="py-4 text-gray-700">
                  Premium polyester blend, steel bungee hooks, floral reinforcement trim
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 font-semibold text-black">Adjustable Width</td>
                <td className="py-4 text-gray-700">24\" - 42\"</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 font-semibold text-black">Height</td>
                <td className="py-4 text-gray-700">26\"</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 font-semibold text-black">Weight Capacity</td>
                <td className="py-4 text-gray-700">Safe for ages 6 months - 3 years</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-black">Care Instructions</td>
                <td className="py-4 text-gray-700">Machine washable (delicate cycle)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Is installation difficult?</h3>
              <p className="text-gray-700">
                Not at all. The bungee system takes about 2 minutes to set up with no tools required.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Can I take it with me when I travel?</h3>
              <p className="text-gray-700">
                Yes! Our travel kit includes a carrying case. Many parents take their PlayGate to hotels, grandparent houses, and vacation rentals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">What if my doorway is an odd size?</h3>
              <p className="text-gray-700">
                The bungee system adjusts from 24\" to 42\". If your opening is smaller, you can wrap the bungee for a tighter fit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Is it safe?</h3>
              <p className="text-gray-700">
                Yes. PlayGate is tested for stability and durability. It's designed for children 6 months to 3 years. Always supervise your child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Ready to Create Your Peaceful Space?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Choose your color and join hundreds of parents creating calm, designed spaces.
        </p>
        <button className="btn btn-primary">
          Select Your PlayGate
        </button>
      </section>
    </div>
  );
}