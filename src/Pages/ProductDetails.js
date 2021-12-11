function ProductDetails() {
  return (
    <div className="container mx-auto p-5 pt-0">
      {/* Call Nav */}
      <div className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200"
              src="#"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-700 tracking-widest">
                Category
              </h2>
              <h1 className="text-gray-900 text-4xl title-font font-bold mb-1">
                title
              </h1>
              <div className="flex mt-5 mb-3">Display Star</div>
              <p className="leading-relaxed mb-3">Description</p>
              <div className="flex mb-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Currency
                </span>
              </div>
              <p className="text-purple-600 hover:underline">
                {"<Link Go Back"}
              </p>

              <div className="flex border-t border-gray-300 mt-5 pt-5">
                <button className="button items-center justify-center px-6 text-lg text-white tracking-wide transition w-full">
                  Remove from Cart
                </button>
                <button className="button items-center justify-center px-6 text-lg text-white tracking-wide transition w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call Footer */}
    </div>
  );
}

export default ProductDetails;
