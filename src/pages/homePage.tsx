import { useContext } from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { CartContext } from "../context/_cartContext";

export const HomePage = () => {
  const { data, loading, error } = useGetProducts();
  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold text-center my-5">Vores produkter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto lg:grid-cols-3 gap-6">
        {data?.products.map((product) => (
          <div
            key={product.id}
            className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <img
              className="object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.title}
                </h5>
              </a>
              <p className="text-sm text-gray-500 my-2">
                {product.description?.slice(0, 100)}...
              </p>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    {product.price} Dkk
                  </span>
                </p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Tilføj til kurv
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
