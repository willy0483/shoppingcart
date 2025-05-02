import { useContext } from "react";
import { CartContext } from "../context/_cartContext";

export const Cart = () => {
  const { cartData, removeFromCart, clearCart, addToCart } =
    useContext(CartContext);

  return (
    <div className="py-4">
      <h2>Cart:</h2>
      <div className="flex justify-center">
        <ul className="flex flex-col gap-4 w-[450px]">
          {cartData.map((product) => {
            return (
              <li key={product.id} className="flex py-6">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="size-full object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{product.title}</h3>
                      <p className="ml-4">
                        {product.price * product.quantity!}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex justify-between w-20">
                      <button
                        className="hover:cursor-pointer"
                        onClick={() => removeFromCart(product.id)}
                      >
                        -
                      </button>

                      <p className="text-gray-500"> {product.quantity}</p>
                      <button
                        className="hover:cursor-pointer"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => clearCart()}
                        className=" hover:cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="btn" onClick={() => clearCart()}>
        Tøm kurv
      </button>
    </div>
  );
};
