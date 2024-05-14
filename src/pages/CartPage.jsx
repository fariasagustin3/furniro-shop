import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Portrait from "../components/Portrait"
import { isMobile } from "react-device-detect"

const cartProducts = [
  {
    id: 1,
    image: "/product-image.png",
    title: "Aasgard sofa",
    price: 1200,
    quantity: 1,
    subtotal: 1200,
  },
  {
    id: 2,
    image: "/product-image.png",
    title: "Aasgard sofa",
    price: 1200,
    quantity: 1,
    subtotal: 1200,
  },
  {
    id: 3,
    image: "/product-image.png",
    title: "Aasgard sofa",
    price: 1200,
    quantity: 1,
    subtotal: 1200,
  },
  {
    id: 4,
    image: "/product-image.png",
    title: "Aasgard sofa",
    price: 1200,
    quantity: 1,
    subtotal: 1200,
  },
]

const CartPage = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Portrait page="Cart" />
      <div className="w-screen h-full">
        <div className="px-5 md:px-20 flex flex-col md:flex-row items-start justify-center gap-10 my-5">

          {/* left side table */}
          <table className="w-full md:flex-[2.5]">
            <thead>
              <tr className="bg-[#F9F1E7]">
                <th className="py-5 font-medium text-sm">Product</th>
                <th className="font-medium text-sm">Price</th>
                <th className="font-medium text-sm">Quantity</th>
                <th className={isMobile ? "hidden" : "font-medium text-sm"}>Subtotal</th>
                <th className="font-medium text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr>
                  <td className="w-full h-20 flex items-center justify-center gap-3 my-2">
                    <img src={product.image} alt="" className="w-14 h-14 object-cover" />
                    <span className="text-xs font-semibold">{product.title}</span>
                  </td>
                  <td className="text-center font-semibold text-[#9F9F9F] text-sm">${product.price}</td>
                  <td className="text-center text-sm font-semibold">{product.quantity}</td>
                  {!isMobile && (
                    <td className="text-center text-sm font-medium">{product.subtotal}</td>
                  )}
                  <td className="text-center">
                    <button className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B88E2F" className="w-full h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* right side summary */}
          <div className="w-full flex flex-col flex-1 px-10 py-10 gap-10 bg-[#F9F1E7] items-center shadow-xl">
            <h2 className="text-2xl font-bold text-center">Cart Total</h2>
            <div className="w-full flex flex-row items-center justify-between">
              <span className="font-semibold text-xl">Subtotal</span>
              <span className="font-medium text-[#9F9F9F] text-xl">$1200</span>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <span className="font-semibold text-xl">Total</span>
              <span className="font-medium text-[#B88E2F] text-xl">$1200</span>
            </div>
            <Link to="/checkout">
              <button className="border-[2px] border-gray-600 w-max px-5 py-4 rounded-md text-sm font-semibold">CHECK OUT</button>
            </Link>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </main>
  )
}

export default CartPage