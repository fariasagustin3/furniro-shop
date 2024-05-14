import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState } from "react"

const properties = {
  Width: "20cm",
  Height: "10cm",
  Depth: "20cm",
  Weight: "50kg",
  Material: "Wood",
}

const SingleProductPage = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("description")

  return (
    <main>
      <Navbar />
      <div className="w-full py-10 bg-[#F9F1E7]">
        <div className="flex items-center gap-4 px-20">
          <span className="text-sm font-medium text-[#9F9F9F]">Home</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span className="text-sm font-medium text-[#9F9F9F]">Shop</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          {/* acá hay que controlar el nombre del producto de manera dinámica */}
          <span className="text-sm font-medium text-black">Aasgard Sofa</span>
        </div>
      </div>

      {/* product data */}
      <div className="px-10 md:mx-20 flex flex-col gap-10 mt-10 mb-10">
        <div className="w-full flex flex-col md:flex-row md:items-start items-center justify-center gap-10 md:h-full md:-mb-32">

          {/* left side */}
          <div className="flex-1 bg-[#F9F1E7] w-80 md:w-full px-10 py-10 rounded-md">
            <img src="/single-product.png" alt="" className="w-full" />
          </div>

          {/* right side */}
          <div className="flex-[1.5] h-screen">
            <div className="flex flex-col gap-5">
              <h1 className="m-0 text-[40px] font-medium">Aasgard Sofa</h1>
              <span className="text-[20px] font-medium text-[#9F9F9F]">$20</span>
              <p className="md:text-xs text-sm font-medium md:w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae animi at cupiditate
                aliquam eveniet delectus non qui quasi doloremque facilis eos, illo sit facere aliquid minima
                quos accusantium sed?
              </p>

              {/* colors */}
              <div className="flex flex-row items-center gap-3">
                <div className="w-10 h-10 bg-blue-400 rounded-full" />
                <div className="w-10 h-10 bg-green-400 rounded-full" />
                <div className="w-10 h-10 bg-yellow-400 rounded-full" />
              </div>

              {/* buttons */}
              <div className="flex flex-row items-center gap-5">

                {/* quantity */}
                <div className="border-[2px] border-gray-600 w-max px-5 py-4 rounded-md">
                  <div className="flex flex-row items-center gap-5">
                    <button disabled={quantity < 2} onClick={() => setQuantity(quantity - 1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      </svg>
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* add to cart button */}
                <button className="border-[2px] border-gray-600 w-max px-5 py-4 rounded-md text-sm font-semibold">ADD TO CART</button>
              </div>
              <hr />

              {/* product stock data */}
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex flex-row items-center gap-3 text-gray-400">
                  <span>SKU: </span>
                  <span>HJD7N8DCHSDI8SDI7I7GS</span>
                </div>
                <div className="flex flex-row items-center gap-3 text-gray-400">
                  <span>Category: </span>
                  <span>Living Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="">
          {/* buttons */}
          <div className="flex flex-row items-center gap-10 justify-center">
            <span onClick={() => setTab("description")} className={tab === "description" ? "cursor-pointer text-black font-semibold text-center" : "cursor-pointer text-[#9F9F9F] text-center"}>Description</span>
            <span onClick={() => setTab("additional-information")} className={tab === "additional-information" ? "cursor-pointer text-black font-semibold text-center" : "cursor-pointer text-[#9F9F9F] text-center"}>Additional Information</span>
          </div>
        </div>

        {/* content */}
        {tab === "description" ? (
          // description
          <div className="flex flex-col items-center">
            <p className="text-[#9F9F9F] text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quidem animi natus similique a voluptates in accusamus
              soluta tempora voluptate, facere iste odit, neque excepturi
              quo hic doloribus impedit dignissimos explicabo? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Omnis molestiae
              ratione esse optio iure accusamus, vel aspernatur velit
              exercitationem, nam obcaecati impedit aliquid veniam! Ad
              rerum facere dicta praesentium quod?
            </p>
          </div>
        ) : (
          // additional information
          <div className="w-full flex justify-center ">
            <table className="md:w-1/2 w-full">
              {Object.entries(properties).map((prop, index) => (
                <tr key={index} className={(index % 2 === 0 || index === 0) ? "bg-gray-100" : "bg-slate-200"}>
                  <td className="text-center font-semibold py-5 text-sm">{prop[0]}</td>
                  <td className="text-center text-sm">{prop[1]}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
      <Banner />
      <Footer />
    </main>
  )
}

export default SingleProductPage