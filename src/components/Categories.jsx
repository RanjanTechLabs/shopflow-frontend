const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Kitchen",
];

function Categories() {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Shop by Category
        </h2>

        <p className="mt-2 text-gray-600">
          Explore products across different categories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {category}
            </h3>

            <p className="mt-2 text-gray-500">
              Explore {category.toLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;