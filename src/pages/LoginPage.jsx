import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <img src="/login-background.jpg" alt="" className="absolute w-full h-full object-cover -z-10" />
      <div className="relative z-10 h-full w-full bg-[#ffffff91] flex justify-center items-center">
        <div className="bg-white px-10 pb-10 pt-5 rounded-md shadow-2xl md:w-1/3 w-full mx-3 md:mx-0 flex flex-col gap-4">
          <h1 className="font-medium text-center">Login</h1>
          <div className="flex flex-col gap-1">
            <label className="text-slate-800 font-semibold text-sm">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border-[1px] border-slate-600 px-2 py-3 focus:outline-none text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-800 font-semibold text-sm">Password</label>
            <input
              type="password"
              className="w-full border-[1px] border-slate-600 px-2 py-3 focus:outline-none text-sm"
            />
          </div>
          <Link to="/register">
            <span className="text-sm font-medium hover:underline">{"Don't have an account yet?"}</span>
          </Link>
          <button className="bg-teal-500 py-4 text-white font-medium">LOGIN</button>
        </div>
      </div>
    </main>
  )
}

export default LoginPage