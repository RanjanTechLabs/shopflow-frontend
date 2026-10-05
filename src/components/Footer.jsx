function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-white">
              ShopFlow
            </h2>

            <p className="mt-3 text-gray-400">
              A simple and modern shopping experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">
              Quick Links
            </h3>

            <div className="space-y-2">
              <p>Home</p>
              <p>Products</p>
              <p>Orders</p>
              <p>Cart</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">
              ShopFlow
            </h3>

            <p className="text-gray-400">
              Built with React, Tailwind CSS and Spring Boot.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>
            © 2026 ShopFlow. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;