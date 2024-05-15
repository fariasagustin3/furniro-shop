import { useEffect } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
  }, [token])

  return (
    <div className="md:px-20 px-5 py-8 w-full flex items-center justify-between">
      {/* logo - left */}
      <div>
        <img src="/logo.png" className="w-32" />
      </div>

      {/* link - center */}
      <ul className="hidden md:flex items-center gap-5">
        <Link to="/">
          <li className="text-md font-semibold hover:underline cursor-pointer">Home</li>
        </Link>
        <Link to="/shop">
          <li className="text-md font-semibold hover:underline cursor-pointer">Shop</li>
        </Link>
        <li className="text-md font-semibold hover:underline cursor-pointer">About</li>
        <li className="text-md font-semibold hover:underline cursor-pointer">Contact</li>
      </ul>

      {/* buttons - right */}
      <ul className="flex items-center gap-4">
        {!token && (
          <Link to="/login">
            <li className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </li>
          </Link>
        )}
        <li className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </li>
        <Link to="/wishlist">
          <li className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </li>
        </Link>
        <Link to="/cart">
          <li className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar