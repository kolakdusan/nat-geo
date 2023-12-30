import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { FiChevronsDown } from 'react-icons/fi'

import './Header.scss'
import logo from '../../assets/other/logo.webp'

const Header = () => {
  return (
    <div className="bg-white w-full sticky h-14 flex items-center justify-between z-[1000]">
      <img src={logo} className="my-2 mx-4 h-10 cursor-pointer" />
      <div className="flex items-center text-black">
        <a className="cursor-pointer tracking-[3.5px] px-5">LOGIN</a>
        <a className="cursor-pointer tracking-[3.5px] px-5 hover:opacity-50 transition-all duration-150 ">
          <HiMiniMagnifyingGlass className="text-2xl " />
        </a>
        <div className="newsletters-wrapper relative flex justify-center mr-5">
          <a className="cursor-pointer font-thin newsletters z-10">
            Newsletters
          </a>
          <div className="absolute w-full bottom-0 h-1 bg-[#ffd700] z-5 yellow-bar"></div>
        </div>
        <div className="sign-up-wrapper h-14 flex items-center justify-center px-8 bg-black text-white hover:text-black duration-150 transition-all relative cursor-pointer overflow-hidden ">
          <a className="cursor-pointer z-10 tracking-[3.5px] text-sm">
            SUBSCRIBE
          </a>
          <div
            id="dule"
            className="yellow-full-bar absolute w-full h-full bg-[#ffd700] top-0 z-5 "
          ></div>
        </div>
        <div className=" h-14 flex items-center justify-center px-8 cursor-pointer gap-2">
          <a className="cursor-pointer z-10 tracking-[3.5px]">MENU</a>
          <FiChevronsDown className="text-2xl" />
        </div>
      </div>
    </div>
  )
}
export default Header
