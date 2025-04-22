import React from 'react'

const Product = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry background - stars created with absolute positioning */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large stars */}
        <div className="absolute h-1 w-1 rounded-full bg-white top-20 left-1/4"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-40 left-10"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-60 left-3/4"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-80 left-1/2"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-96 left-1/3"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-10 left-2/3"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-36 left-3/5"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-72 left-1/5"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white top-56 right-24"></div>
        <div className="absolute h-1 w-1 rounded-full bg-white bottom-20 right-40"></div>
        
        {/* Medium stars */}
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-16 left-1/3"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-32 left-1/6"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-48 left-3/5"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-64 left-4/5"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-80 left-1/4"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-96 left-2/3"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-24 right-1/4"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-52 right-1/6"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white top-72 right-2/5"></div>
        <div className="absolute h-0.5 w-0.5 rounded-full bg-white bottom-10 right-1/3"></div>
        
        {/* More tiny stars */}
        <div className="absolute h-px w-px rounded-full bg-white/70 top-12 left-20"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-28 left-40"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-44 left-60"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-60 left-80"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-76 left-1/8"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-92 left-3/8"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-8 right-20"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-24 right-40"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 top-40 right-60"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 bottom-20 left-24"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 bottom-36 left-44"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 bottom-52 left-64"></div>
        <div className="absolute h-px w-px rounded-full bg-white/70 bottom-68 left-84"></div>
      </div>

      {/* Content container with added padding to look better against the starry background */}
      <div className="relative p-6 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Products</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-1"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Lexicon Luxe</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$10</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-2"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Adjective Attire</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$12</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-3"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">ThreadCraft Vibes</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-4"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Verbal Vogue Tees</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$12</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-5"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Jargon Jungle</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$15</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-6"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Syllable Streetwear</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-7"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Syllable Streetwear</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <a href="javascript:void(0)" className="block">
              <div className="w-full">
                <img src="/api/placeholder/400/320" alt="Product-8"
                  className="w-full aspect-[18/24] object-cover object-top" />
              </div>
              <div className="p-4">
                <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Syllable Streetwear</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                  <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className="min-h-[50px] p-4 !pt-0">
              <button type="button" className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product