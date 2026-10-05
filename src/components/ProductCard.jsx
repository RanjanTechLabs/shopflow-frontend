function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">

      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">
          Product Image
        </span>
      </div>

      <div className="p-5">

        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-gray-500 text-sm">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;