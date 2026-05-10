import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-20" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-black mb-4">Peaceful PlayGate</h3>
            <p className="text-sm text-gray-600">
              Creating peace and safety for urban parents.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-sage">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/orders" className="text-gray-600 hover:text-sage">
                  Track Order
                </Link>
              </li>
              <li>
                <a href="mailto:hello@peacefulplaygate.com" className="text-gray-600 hover:text-sage">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sage">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Peaceful PlayGate. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-sage text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-sage text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}