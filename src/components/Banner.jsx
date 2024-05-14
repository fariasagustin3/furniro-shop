const Banner = () => {
  return (
    <div className="w-screen h-full py-16 md:px-20 bg-[#FAF3EA]">
      <div className="flex flex-wrap gap-10 md:gap-0 px-20 md:px-0 items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/high-quality.png" alt="" className="w-10" />
          <div className="flex flex-col justify-start">
            <span className="font-semibold text-lg text-[#242424]">High Quality</span>
            <span className="font-medium text-sm text-[#898989]">crafted from top materials</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="/warranty.png" alt="" className="w-10" />
          <div className="flex flex-col justify-start">
            <span className="font-semibold text-lg text-[#242424]">Warranty Protection</span>
            <span className="font-medium text-sm text-[#898989]">Over 2 years</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="/free-shipping.png" alt="" className="w-10" />
          <div className="flex flex-col justify-start">
            <span className="font-semibold text-lg text-[#242424]">Free Shipping</span>
            <span className="font-medium text-sm text-[#898989]">Order over 150 $</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="/support.png" alt="" className="w-10" />
          <div className="flex flex-col justify-start">
            <span className="font-semibold text-lg text-[#242424]">{"24 / 7 Support"}</span>
            <span className="font-medium text-sm text-[#898989]">Dedicated support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner