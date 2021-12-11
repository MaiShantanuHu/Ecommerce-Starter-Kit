import ProductCard from "./ProductCard";
import Data from "../Data";

function ProductGrid() {
  return (
    <div className="my-20">
      <div className="flex flex-row justify-between my-5">
        <h2 className="text-3xl">Our Collections</h2>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {/* Call Product card */}
      </div>
    </div>
  );
}

export default ProductGrid;
