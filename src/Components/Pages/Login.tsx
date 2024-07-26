import User from "../../../public/icon/user.svg";
import PasBlog from "../../../public/icon/pasBlog.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Login = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname.endsWith("login")) {
        document.body.classList.add(
          "bg-[url('../../../public/img/Login.jpg')]"
        );
      }
    }, []);
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-[300px] flex flex-col m-auto justify-center">
        <img
          src="/public/img/LoginLogo.png"
          alt="LoginLogo"
          className="mb-[50px] cursor-pointer"
        />
        <div className="w-full h-[45px] flex items-center font-body border-white border-solid border-2  rounded mb-5 px-3">
          <label htmlFor="username">
            <User className="mr-5 w-7 cursor-pointer" />
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="w-full bg-transparent outline-none text-white"
          />
        </div>
        <div className="w-full h-[45px] flex items-center font-body border-white border-solid border-2 rounded mb-[43px] px-3">
          <label htmlFor="password">
            <PasBlog className="mr-5 w-7 cursor-pointer" />
          </label>
          <input
            type="password"
            placeholder="password"
            id="password"
            className="w-full bg-transparent outline-none text-white"
          />
        </div>
        <button className="flex items-center justify-center gap-1 w-full h-11 shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.3)] bg-white rounded font-body font-semibold text-[#0d75ff] mb-3">
          Login
          <img src="/public/img/loading.gif" alt="loading" className="w-10" />
        </button>
        <p className="font-body text-white ml-auto cursor-pointer hover:text-[#0d75ff]">
          Forgot password?
        </p>
      </div>
    </section>
  );
};
