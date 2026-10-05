import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold">
          ShopFlow
        </Link>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-gray-300"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="hover:text-gray-300"
          >
            Cart
          </Link>

          <Link
            to="/orders"
            className="hover:text-gray-300"
          >
            Orders
          </Link>

          <Link
            to="/login"
            className="hover:text-gray-300"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;