import React from 'react'

const Product = () => {
    return (
        <div>
            <div class="p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Premium Threads</h2>

                <div class="bg-white p-4 rounded shadow-md mb-6">
                    <div class="flex flex-col md:flex-row gap-4 md:items-center mb-4">
                        <div class="flex-1">
                            <div class="relative">
                                <input type="text" placeholder="Search products..."
                                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                            </div>
                        </div>
                        <button id="showFilters" class="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 md:hidden">
                            Filters
                        </button>
                    </div>

                    <div id="filterOptions" class="hidden md:block">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                          
                            <div class="filter-group">
                                <h3 class="font-medium text-slate-800 mb-2">Price Range</h3>
                                <div class="flex flex-col space-y-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="price-0-10" class="mr-2"/>
                                            <label for="price-0-10">$0 - $10</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="price-10-15" class="mr-2"/>
                                            <label for="price-10-15">$10 - $15</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="price-15-plus" class="mr-2"/>
                                            <label for="price-15-plus">$15+</label>
                                    </div>
                                </div>
                            </div>

                         
                            <div class="filter-group">
                                <h3 class="font-medium text-slate-800 mb-2">Colors</h3>
                                <div class="flex flex-wrap gap-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="color-black" class="mr-2"/>
                                            <label for="color-black" class="flex items-center">
                                                <span class="w-4 h-4 bg-black rounded-full mr-1"></span> Black
                                            </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="color-white" class="mr-2"/>
                                            <label for="color-white" class="flex items-center">
                                                <span class="w-4 h-4 bg-white border border-gray-300 rounded-full mr-1"></span> White
                                            </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="color-blue" class="mr-2"/>
                                            <label for="color-blue" class="flex items-center">
                                                <span class="w-4 h-4 bg-blue-500 rounded-full mr-1"></span> Blue
                                            </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="color-red" class="mr-2"/>
                                            <label for="color-red" class="flex items-center">
                                                <span class="w-4 h-4 bg-red-500 rounded-full mr-1"></span> Red
                                            </label>
                                    </div>
                                </div>
                            </div>

                            <div class="filter-group">
                                <h3 class="font-medium text-slate-800 mb-2">Brands</h3>
                                <div class="flex flex-col space-y-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="brand-lexicon" class="mr-2"/>
                                            <label for="brand-lexicon">Lexicon</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="brand-adjective" class="mr-2"/>
                                            <label for="brand-adjective">Adjective</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="brand-threadcraft" class="mr-2"/>
                                            <label for="brand-threadcraft">ThreadCraft</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="brand-verbal" class="mr-2"/>
                                            <label for="brand-verbal">Verbal Vogue</label>
                                    </div>
                                </div>
                            </div>

                           
                            <div class="filter-group">
                                <h3 class="font-medium text-slate-800 mb-2">Categories</h3>
                                <div class="flex flex-col space-y-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="cat-tshirts" class="mr-2"/>
                                            <label for="cat-tshirts">T-Shirts</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="cat-hoodies" class="mr-2"/>
                                            <label for="cat-hoodies">Hoodies</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="cat-jeans" class="mr-2"/>
                                            <label for="cat-jeans">Jeans</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="cat-accessories" class="mr-2"/>
                                            <label for="cat-accessories">Accessories</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 flex justify-between">
                            <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                                Clear All
                            </button>
                            <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>

           
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product1.webp" alt="Product-1"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Lexicon Luxe</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$10</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>

                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product2.webp" alt="Product-2"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Adjective Attire</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$12</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>

                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product3.webp" alt="Product-3"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">ThreadCraft Vibes</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>

                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product7.webp" alt="Product-4"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Verbal Vogue Tees</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$12</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>

                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product5.webp" alt="Product-5"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Jargon Jungle</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$15</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>

                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product6.webp" alt="Product-6"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Syllable Streetwear</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>

                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product1.webp" alt="Product-7"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Syllable Streetwear</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>

                    <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
                        <a href="javascript:void(0)" class="block">
                            <div class="w-full">
                                <img src="https://readymadeui.com/images/product2.webp" alt="Product-8"
                                    class="w-full aspect-[18/24] object-cover object-top" />
                            </div>
                            <div class="p-4">
                                <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">Syllable Streetwear</h5>
                                <div class="mt-2 flex items-center flex-wrap gap-2">
                                    <h6 class="text-sm sm:text-base font-semibold text-slate-900">$14</h6>
                                    <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="min-h-[50px] p-4 !pt-0">
                            <button type="button" class="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}

export default Product