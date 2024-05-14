import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Portrait from "../components/Portrait"

const CheckoutPage = () => {
  return (
    <main>
      <Navbar />
      <Portrait page="Checkout" />
      <div className="px-20">
        <div className="flex flex-row items-start justify-center gap-10 my-10">

          {/* left side form */}
          <form className="flex flex-col flex-1 gap-10">
            <h1 className="text-slate-800 font-bold text-3xl my-10">Billing Details</h1>

            {/* name - last name */}
            <div className="flex items-center gap-5 w-full">
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
          <div className="flex flex-col flex-1 mt-20">
            <div className="flex flex-col px-20 gap-5">
              <div className="flex flex-row items-center justify-between">
                <span className="font-medium text-2xl">Product</span>
                <span className="font-medium text-2xl">Subtotal</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-medium text-sm">Aasgard sofa x 1</span>
                <span className="font-medium text-sm">$1200</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-medium text-sm">Subtotal</span>
                <span className="font-medium text-sm">$1200</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-extrabold text-sm">Total</span>
                <span className="font-extrabold text-sm">$1200</span>
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