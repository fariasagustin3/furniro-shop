import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Portrait from "../components/Portrait"

const CheckoutPage = () => {
  const [products, setProducts] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cart"));
    setProducts(cartProducts);
    // console.log(cartProducts.length)

    let sum = 0;
    for(let i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].subtotal
    }

    setTotal(sum)
    setSubtotal(sum)

    window.scrollTo(0, 0)
  }, [setTotal])

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Portrait page="Checkout" />
      <div className="md:px-20 px-10">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 my-10">

          {/* left side form */}
          <form className="flex flex-col flex-1 gap-10 w-full">
            <h1 className="text-slate-800 font-bold text-3xl my-10">Billing Details</h1>

            {/* name - last name */}
            <div className="flex flex-col md:flex-row items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">First Name</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Last Name</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* company name */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Company Name (optional)</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* country/region */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Country / Region</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* street address */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Street Address</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* town city */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Town / City</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* state / province */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">State / Province</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* ZIP code */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">ZIP code</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Phone</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* email address */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Email Address</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* additional information */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Additional Information</label>
                <input type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>
          </form>

          {/* right side payment methods */}
          <div className="flex w-full flex-col flex-1 mt-20">
            <div className="flex flex-col md:px-20 gap-5">
              <div className="flex flex-row items-center justify-between">
                <span className="font-medium text-2xl">Product</span>
                <span className="font-medium text-2xl">Subtotal</span>
              </div>
              {products?.map((product) => (
                <div key={product?.id} className="flex flex-row items-center justify-between">
                  <span className="font-medium text-sm">{product?.title} x {product?.quantity}</span>
                  <span className="font-medium text-sm">${product?.subtotal}</span>
                </div>
              ))}
              <hr />
              <div className="flex flex-row items-center justify-between">
                <span className="font-medium text-sm">Subtotal</span>
                <span className="font-medium text-sm">${subtotal}</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-extrabold text-sm">Total</span>
                <span className="font-extrabold text-sm">${total}</span>
              </div>
              <hr />
            </div>
          </div>

        </div>
      </div>
      <Banner />
      <Footer />
    </main>
  )
}

export default CheckoutPage