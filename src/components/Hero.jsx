function Hero() {
  return (
    <section className="bg-gray-900 text-white rounded-2xl px-8 py-16 md:px-16 md:py-24">
      <div className="max-w-3xl">

        <p className="text-blue-400 font-semibold mb-4">
          WELCOME TO SHOPFLOW
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Everything you need,
          <span className="text-blue-400"> in one place.</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
          Discover quality products, explore great deals,
          and enjoy a simple shopping experience with ShopFlow.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
          Shop Products
        </button>

      </div>
    </section>
  );
}

export default Hero;