import { useState } from "react"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Portrait from "../components/Portrait"
import { products } from "../data"
import { Link } from "react-router-dom"
import { isMobile } from "react-device-detect"

const sortOptions = [
  {
    id: 1,
    option: "Low Price"
  },
  {
    id: 2,
    option: "High Price"
  },
]

const ProductsPage = () => {
  const [selected, setSelected] = useState(1)

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Portrait page="Shop" />

      {/* filters */}
      <div className="px-10 md:px-40 py-10 w-screen bg-[#F9F1E7] mb-10">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
          <span className="font-semibold text-sm">{"Showing 1–16 of 32 results"}</span>
          {/* filter items */}
          <div className="flex gap-10 flex-col items-center md:flex-row">
            {/* products quantity */}
            <div className="flex items-center gap-2">
              <span>Show</span>
              <input type="number" className="w-16 h-10 px-2 bg-white border-none focus:outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <span>Short By</span>
              <select className="w-40 text-sm py-3 focus:outline-none">
                <option disabled selected>Sort By</option>
                {sortOptions.map((opt) => (
                  <option key={opt.id}>{opt.option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* product list */}
      <div className="w-full h-full px-20">
        <div className="flex flex-wrap items-start justify-center gap-10">
          {products.slice(0, 16).map((product) => (
            // product item
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className="relative w-56 h-96 bg-[#f0f1f3]">
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
            </Link>
          ))}

          {/* pagination */}
          <div className="w-full flex flex-wrap items-center justify-center gap-5 my-10">
            <button onClick={() => setSelected(1)} className={selected === 1 ? "w-10 h-10 px-5 py-5 bg-[#B88E2F] flex items-center justify-center font-bold text-white rounded-md" : "w-10 h-10 px-5 py-5 bg-[#F9F1E7] flex items-center justify-center font-bold text-black rounded-md"}>1</button>
            <button onClick={() => setSelected(2)} className={selected === 2 ? "w-10 h-10 px-5 py-5 bg-[#B88E2F] flex items-center justify-center font-bold text-white rounded-md" : "w-10 h-10 px-5 py-5 bg-[#F9F1E7] flex items-center justify-center font-bold text-black rounded-md"}>2</button>
            <button onClick={() => setSelected(3)} className={selected === 3 ? "w-10 h-10 px-5 py-5 bg-[#B88E2F] flex items-center justify-center font-bold text-white rounded-md" : "w-10 h-10 px-5 py-5 bg-[#F9F1E7] flex items-center justify-center font-bold text-black rounded-md"}>3</button>
            <button onClick={() => setSelected(4)} className={selected === 4 ? "w-10 h-10 px-5 py-5 bg-[#B88E2F] flex items-center justify-center font-bold text-white rounded-md" : "w-10 h-10 px-5 py-5 bg-[#F9F1E7] flex items-center justify-center font-bold text-black rounded-md"}>4</button>
            <button onClick={() => setSelected(5)} className={selected === 5 ? "w-10 h-10 px-5 py-5 bg-[#B88E2F] flex items-center justify-center font-bold text-white rounded-md" : "w-10 h-10 px-5 py-5 bg-[#F9F1E7] flex items-center justify-center font-bold text-black rounded-md"}>5</button>
          </div>
        </div>
      </div>
      
      {/* {!isMobile && ( */}
        <Banner />
      {/* // )} */}
      <Footer />
    </main >
  )
}

export default ProductsPage