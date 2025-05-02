import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex gap-6 p-4">
        <li>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/checkout">
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
