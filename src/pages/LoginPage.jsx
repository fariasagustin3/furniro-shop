import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://furniro-app-backend.onrender.com/auth/login", input);
      localStorage.setItem("token", response.data.token);
      setInput({
        email: "",
        password: "",
      });
      toast.success("Login success!")
      setTimeout(() => {
        window.location.href = "http://localhost:5173/"
      }, 2000)
    } catch (err) {
      toast.error("Something went wrong")
      console.log(err)
    }
  }

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <img src="/login-background.jpg" alt="" className="absolute w-full h-full object-cover -z-10" />
      <div className="relative z-10 h-full w-full bg-[#ffffff91] flex justify-center items-center">
        <form onSubmit={handleLogin} className="bg-white px-10 pb-10 pt-5 rounded-md shadow-2xl md:w-1/3 w-full mx-3 md:mx-0 flex flex-col gap-4">
          <h1 className="font-medium text-center">Login</h1>
          <div className="flex flex-col gap-1">
            <label className="text-slate-800 font-semibold text-sm">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border-[1px] border-slate-600 px-2 py-3 focus:outline-none text-sm"
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-800 font-semibold text-sm">Password</label>
            <input
              type="password"
              className="w-full border-[1px] border-slate-600 px-2 py-3 focus:outline-none text-sm"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
          </div>
          <Link to="/register">
            <span className="text-sm font-medium hover:underline">{"Don't have an account yet?"}</span>
          </Link>
          <button type="submit" className="bg-teal-500 py-4 text-white font-medium">LOGIN</button>
        </form>
      </div>
      <ToastContainer autoClose={2000} />
    </main>
  )
}

export default LoginPage