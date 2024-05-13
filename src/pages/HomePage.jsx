import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from "react";
import { categories, products } from '../data'

const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const arr = []
    products.map((product) => {
      if (product.trending) {
        arr.push(product)
      }
    })
    setTrendingProducts(arr)
  }, [])

  const handleNext = () => {
    isMobile
      ? setOffset(prevOffset => Math.min(prevOffset + 1, categories.length - 1))
      : setOffset(prevOffset => Math.min(prevOffset + 1, categories.length - 5))
  };

  const handlePrev = () => {
    setOffset(prevOffset => Math.max(prevOffset - 1, 0));
  };

  return (
    <main>
      <Navbar />
      {/* header section */}
      <div className="relative w-screen h-screen">
        <img src="/header-image.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute w-[350px] md:w-[500px] bg-[#FFF3E3] h-max top-0 bottom-0 right-0 md:right-20 mx-5  m-auto py-10 px-10 rounded-md shadow-xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl leading-5 font-extrabold text-[#B88E2F]">Discover Our New Collection</h3>
            <p className="text-sm font-medium text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Link to="/shop">
              <button className="px-10 py-5 font-extrabold text-xs text-white bg-[#B88E2F] w-max mt-5">BUY NOW</button>
            </Link>
          </div>
        </div>
      </div>

      {/* categories section */}
      <div className="flex flex-col items-center justify-start px-10 md:px-20 my-20">
        <h2 className="text-2xl font-bold text-[#333333] text-center">Browse The Range</h2>
        <span className="text-sm font-medium text-[#666666] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

        {/* category section */}
        <div className="relative mt-5 flex gap-5 items-center w-full justify-center h-full">
          <button onClick={handlePrev} className="absolute top-0 bottom-0 left-3 m-auto bg-[#B88E2F] h-max px-2 py-2 rounded-full shadow-xl z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          <div style={isMobile
            ? { transform: `translateX(-${offset * 15.25}rem)` }
            : { transform: `translateX(-${offset * 15.25}rem)` }}
            className="flex justify-start gap-5 w-full transition 0.5"
          >

            {/* category item */}
            {categories.map((category) => (
              <Link to={`/products/category/${category.name}`}>
                <div key={category.id} className="flex flex-col gap-4 min-w-56">
                  <img src={category.image} className="w-56 h-80 object-cover" alt="" />
                  <span className="font-bold text-md text-center text-[#333333]">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
          <button onClick={handleNext} className="absolute top-0 bottom-0 right-3 m-auto bg-[#B88E2F] h-max px-2 py-2 rounded-full shadow-xl z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* trending products section */}
      <div className="mb-20 mx-24 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#333333] mb-10 text-center">Our Products</h2>
        <div className="flex flex-wrap justify-center items-start gap-10 ">
          {trendingProducts?.slice(0, 8).map((product) => (
            // product item
            <div key={product.id} className="relative w-56 h-96 bg-[#dfe0e2]">
              {product.trending && (
                <div className="absolute top-2 right-2 bg-teal-400 w-7 h-7 rounded-full">
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-[8px] text-white">TOP</span>
                  </div>
                </div>
              )}
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-400 w-7 h-7 rounded-full">
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-[8px] text-white">-{product.discount}%</span>
                  </div>
                </div>
              )}
              <img src={product.image} alt="" className="w-56 h-72 object-cover" />
              <div className="px-3 py-2 flex flex-col gap-2">
                <span className="text-sm font-bold text-[#3A3A3A]">{product.title}</span>
                <span className="text-xs font-medium text-[#898989]">{product.categoryName}</span>
                <span className="text-sm font-bold text-[#3A3A3A]">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="w-max px-7 py-3 bg-transparent border-[1px] border-[#B88E2F] text-[#B88E2F] text-xs font-semibold mt-5"
        >
          View More
        </button>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage