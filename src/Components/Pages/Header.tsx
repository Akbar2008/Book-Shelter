import Search from "../../../public/icon/search.svg";
import Date from "../../../public/icon/date.svg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="w-[1440px] m-auto flex justify-between items-center py-[14px] font-sans">
        <Link to={"/"}>
          <img src="/img/Logo.png" alt="Logo" className="cursor-pointer" />
        </Link>
        <div className="w-[670px] h-12 flex items-center rounded-[30px] bg-[#f9fdfd] border-solid border-[#e3e6eb] shadow-3xl px-4 mr-20">
          <label htmlFor="search" className="cursor-pointer">
            <Search />
          </label>
          <input
            type="text"
            placeholder="Search books"
            className="w-full ml-3 outline-none text-[rgba(0, 0, 0, 0.24)] font-normal"
            id="search"
          />
        </div>
        <div className="flex items-center">
          <img
            src={"/img/moon.png" || "/img/sun.png"}
            alt={"moon" || "sun"}
            className="w-8 mr-[15px] cursor-pointer"
          />
          <button className="w-[99px] h-10 rounded bg-[#0d75ff] text-white hover:bg-[#60ABFF]">
            Logout
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#e3e6eb]"></div>
      <div className="w-[1440px] h-14 flex justify-between items-center m-auto">
        <p className="ml-80">Showing 18 Result(s)</p>
        <div className="flex items-center justify-center gap-1 w-[165px] h-[34px] rounded bg-[#a6b0c3] font-medium text-white ">
          <Date />
          Order by newest
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#e3e6eb]"></div>
    </header>
  );
};
