const Footer = () => {
  return (
    <div className="w-screen h-full py-14 bg-[#eee]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-start justify-between px-10">
        {/* part 1 */}
        <div className="flex flex-col flex-1 gap-5 md:gap-14">
          <img src="/logo.png" alt="" className="w-20" />
          <span className="text-sm text-[#9F9F9F] font-medium">400 University Drive Suite 200 Coral Gables, FL 33134 USA</span>
        </div>

        {/* part 2 */}
        <div className="flex flex-col items-center flex-1">
          <ul className="flex flex-col items-start gap-3 md:gap-10">
            <li className="text-[#9F9F9F] font-medium">Links</li>
            <li className="text-black font-medium cursor-pointer hover:underline">Home</li>
            <li className="text-black font-medium cursor-pointer hover:underline">Shop</li>
            <li className="text-black font-medium cursor-pointer hover:underline">About</li>
            <li className="text-black font-medium cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>

        {/* part 3 */}
        <div className="flex flex-col items-center flex-1">
          <ul className="flex flex-col items-start gap-3 md:gap-10">
            <li className="text-[#9F9F9F] font-medium">Help</li>
            <li className="text-black font-medium cursor-pointer hover:underline">Payment Options</li>
            <li className="text-black font-medium cursor-pointer hover:underline">Returns</li>
            <li className="text-black font-medium cursor-pointer hover:underline">Privacy Policies</li>
          </ul>
        </div>

        {/* part 4 */}
        <div className="flex flex-col flex-1">
          <span className="text-[#9F9F9F] font-medium">Newsletter</span>
          <div className="flex items-center gap-2">
            <input
              className="px-3 py-3 bg-transparent border-b-[1px] border-black text-sm font-medium focus:outline-none"
              type="email"
            />
            <button className="px-3 py-3 bg-transparent border-b-[1px] border-black text-sm font-medium">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer