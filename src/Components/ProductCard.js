import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-lg rounded-lg">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        Category
      </p>
      <img src={item.image} className="cursor-pointer" alt="products" />
      <h4 className="my-3">
        title
        <p className="text-purple-600 hover:underline">Know More</p>
      </h4>
      <div className="flex">
        <StarIcon className="h-5 text-pink-500" />
      </div>
      <div className="mb-5">
        <Currency quantity={Math.round(100 * 75)} currency="INR" />
      </div>
      <button className="mt-auto button text-white text-bold">
        Remove from Cart
      </button>
      <button className="mt-auto button text-white text-bold">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
