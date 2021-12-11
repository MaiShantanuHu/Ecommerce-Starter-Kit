import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Nav() {
  return (
    // Parent div for whole Nav
    <div className="flex items-center flex-grow md:flex md:flex-row md:justify-between">
      {/* Product Logo */}
      <div className="cursor-pointer mt-2 flex items-center flex-grow sm:flex-grow-0">
        {/* Logo icon div */}
        <div className="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>

        {/* Company name */}
        <h1 className="text-3xl text-gray-600 ml-2">ShopNow</h1>
      </div>

      {/* Right-side-top-nav */}
      <div className="flex items-center space-x-6 mt-2 sm:text-base">
        <p className="page-link-style">Home</p>

        <p className="page-link-style">About</p>

        <p className="page-link-style">Contact</p>

        {/* Cart Icon */}
        <div className="page-link-style relative flex items-center">
          <div className="absolute top-3 right-2 md:top-6 md:left-8 h-5 w-5 bg-purple-600 text-center rounded-full text-white text-sm">
            {cartItems.length}
          </div>
          <ShoppingCartIcon className="h-8" />
          {/* page-link-style is custom utility */}
          <p className="hidden md:inline page-link-style px-2">Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
