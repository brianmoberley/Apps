'use client';

import { useState } from 'react';

export default function OrderTracking() {
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && orderNumber) {
      setSubmitted(true);
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="section-padding max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 text-center">
          Track Your Order
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
          Enter your email and order number to see the status of your Peaceful PlayGate.
        </p>
      </section>

      {/* Tracking Form */}
      <section className="section-padding max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <div className="bg-light-gray rounded-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sage"
                  required
                />
              </div>

              <div>
                <label htmlFor="orderNumber" className="block text-sm font-semibold text-black mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g., ORD-123456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sage"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Track Order
              </button>
            </form>

            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Note:</strong> Order tracking will be integrated with ShipStation.
              </p>
              <p className="text-sm text-gray-600">
                Real-time tracking updates will be available once your order ships.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-light-gray rounded-lg p-8 md:p-12 text-center">
            <div className="mb-6">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                <span className="text-white text-xl">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Order Found!</h2>
              <p className="text-gray-700 mb-4">
                Thank you for your purchase, {email}!
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-black mb-4">Order #{orderNumber}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-black">Processing</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Tracking Available</span>
                  <span className="font-semibold text-black">Coming Soon</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Est. Delivery</span>
                  <span className="font-semibold text-black">5-7 Business Days</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              A confirmation email has been sent to your inbox with tracking information. You'll also receive updates as your PlayGate ships.
            </p>

            <button
              onClick={() => {
                setEmail('');
                setOrderNumber('');
                setSubmitted(false);
              }}
              className="btn btn-secondary"
            >
              Track Another Order
            </button>
          </div>
        )}
      </section>

      {/* Additional Info */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Shipping & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Shipping</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• US Orders: 5-7 Business Days</li>
                <li>• International: 10-14 Business Days</li>
                <li>• Free shipping on orders over $100</li>
                <li>• Flat rate for international orders</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Questions?</h3>
              <p className="text-gray-700 mb-4">
                We're here to help with any questions about your order.
              </p>
              <a
                href="mailto:hello@peacefulplaygate.com"
                className="text-sage font-semibold hover:text-eucalyptus"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}