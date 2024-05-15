import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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
  const [tab, setTab] = useState("description");
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://furniro-app-backend.onrender.com/products/${id}/product`);
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProduct();
    window.scrollTo(0, 0)
  }, [])

  const addToCart = () => {
    const cartProductsArray = [];
    const productsItem = {
      id: product?._id,
      image: product?.image,
      title: product?.title,
      price: product?.price,
      quantity: quantity,
      subtotal: quantity * product?.price,
    }

    toast.success("Product added to cart")
    
    const localStorageProductsCart = localStorage.getItem("cart");
    const localStorageProductsCartToJSON = JSON.parse(localStorageProductsCart)

    if(!localStorageProductsCart) {
      cartProductsArray.push(productsItem);
      const cartProductStringified = JSON.stringify(cartProductsArray)
      localStorage.setItem("cart", cartProductStringified);
    } else {
      localStorageProductsCartToJSON.push(productsItem)
      localStorage.setItem("cart", JSON.stringify(localStorageProductsCartToJSON))
    }
  }

  return (
    <main className="overflow-x-hidden">
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
          <span className="text-sm font-medium text-black">{product?.title}</span>
        </div>
      </div>

      {/* product data */}
      <div className="px-10 md:mx-20 flex flex-col gap-10 mt-10 mb-10">
        <div className="w-full flex flex-col md:flex-row md:items-start items-center justify-center gap-10 md:h-full md:-mb-60">

          {/* left side */}
          <div className="flex-1 flex items-center justify-center bg-[#F9F1E7] w-full md:h-full md:w-full px-10 py-10 rounded-md">
            <img src={product?.image} alt="" className="w-full md:w-96 md:h-96 md:object-cover rounded-md" />
          </div>

          {/* right side */}
          <div className="flex-[1.5] h-screen">
            <div className="flex flex-col gap-5">
              <h1 className="m-0 text-[40px] font-medium">{product?.title}</h1>
              <span className="text-[20px] font-medium text-[#9F9F9F]">${product?.price}</span>
              <p className="md:text-xs text-sm font-medium md:w-2/3">
                {product?.shortDescription}
              </p>

              {/* colors */}
              <div className="flex flex-row items-center gap-3">
                {product?.colors?.map((color, index) => (
                  <div key={index} className={`w-10 h-10 bg-[#${color}] rounded-full`} />
                ))}
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
                <button
                  onClick={addToCart}
                  className="border-[2px] border-gray-600 w-max px-5 py-4 rounded-md text-sm font-semibold"
                >
                  ADD TO CART
                </button>
              </div>
              <hr />

              {/* product stock data */}
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex flex-row items-center gap-3 text-gray-400">
                  <span>SKU: </span>
                  <span>{product?.SKU}</span>
                </div>
                <div className="flex flex-row items-center gap-3 text-gray-400">
                  <span>Category: </span>
                  <span>{product?.categoryName}</span>
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
              {product?.longDescription}
            </p>
          </div>
        ) : (
          // additional information
          <div className="w-full flex justify-center ">
            <table className="md:w-1/2 w-full">
              {Object.entries(product?.additionalInformation)?.map((prop, index) => (
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
      <ToastContainer />
    </main>
  )
}

export default SingleProductPage