import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality wireless headphones.",
    price: 2499,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and stay connected.",
    price: 3999,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    description: "A comfortable keyboard for work and gaming.",
    price: 5499,
  },
];

function FeaturedProducts() {
  return (
    <section className="mt-16">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Products
        </h2>

        <p className="mt-2 text-gray-600">
          Check out some of our popular products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;