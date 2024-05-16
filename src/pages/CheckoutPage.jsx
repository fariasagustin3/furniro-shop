import { useEffect, useRef, useState } from "react"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Portrait from "../components/Portrait"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import PayPalButton from "../components/PayPalButton"

const CheckoutPage = () => {
  const [products, setProducts] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address: "",
    town: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInformation: "",
  })

  const firstName = useRef()
  const lastName = useRef()
  const companyName = useRef()
  const country = useRef()
  const address = useRef()
  const town = useRef()
  const state = useRef()
  const zipCode = useRef()
  const phone = useRef()
  const email = useRef()
  const additionalInformation = useRef()

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cart"));
    setProducts(cartProducts);

    let sum = 0;
    for (let i = 0; i < cartProducts?.length; i++) {
      sum += cartProducts[i]?.subtotal
    }

    setTotal(sum)
    setSubtotal(sum)

    window.scrollTo(0, 0)
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const handleCreateOrder = async (event) => {

    const newOrder = {
      products: products,
      total: total,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      companyName: companyName.current.value,
      country: country.current.value,
      address: address.current.value,
      town: town.current.value,
      state: state.current.value,
      zipCode: zipCode.current.value,
      phone: phone.current.value,
      email: email.current.value,
      additionalInformation: additionalInformation.current.value,
    }

    try {
      console.log(newOrder)
      await axios.post("http://localhost:3001/orders/create", newOrder);
      console.log(newOrder)
      toast.success("Order created successfully.")
      setInput({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        address: "",
        town: "",
        state: "",
        zipCode: "",
        phone: "",
        email: "",
        additionalInformation: "",
      })

      localStorage.removeItem("cart");
      // window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Portrait page="Checkout" />
      <div className="md:px-20 px-10">
        <form onSubmit={handleCreateOrder} className="flex flex-col md:flex-row items-start justify-center gap-10 my-10">

          {/* left side form */}
          <div className="flex flex-col flex-1 gap-10 w-full">
            <h1 className="text-slate-800 font-bold text-3xl my-10">Billing Details</h1>

            {/* name - last name */}
            <div className="flex flex-col md:flex-row items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">First Name</label>
                <input ref={firstName} name="firstName" value={input.firstName} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Last Name</label>
                <input ref={lastName} name="lastName" value={input.lastName} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* company name */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Company Name (optional)</label>
                <input ref={companyName} name="companyName" value={input.companyName} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* country/region */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Country / Region</label>
                <input ref={country} name="country" value={input.country} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* street address */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Street Address</label>
                <input ref={address} name="address" value={input.address} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* town city */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Town / City</label>
                <input ref={town} name="town" value={input.town} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* state / province */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">State / Province</label>
                <input ref={state} name="state" value={input.state} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* ZIP code */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">ZIP code</label>
                <input ref={zipCode} name="zipCode" value={input.zipCode} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Phone</label>
                <input ref={phone} name="phone" value={input.phone} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* email address */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Email Address</label>
                <input ref={email} name="email" value={input.email} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>

            {/* additional information */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-slate-800 font-semibold text-sm">Additional Information</label>
                <input ref={additionalInformation} name="additionalInformation" value={input.additionalInformation} onChange={handleChange} type="text" className="px-3 py-2 focus:outline-none text-sm border-[1px] border-slate-600" />
              </div>
            </div>
          </div>

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
              {/* <button type="submit" className="bg-[#B88E2F] py-3 font-semibold text-sm text-white">BUY</button> */}
              <PayPalButton total={total} handleCreateOrder={handleCreateOrder} />
            </div>
          </div>
        </form>
      </div>
      <Banner />
      <Footer />
      <ToastContainer autoClose={2000} />
    </main>
  )
}

export default CheckoutPage