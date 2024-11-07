import { SiPlaystation4 } from "react-icons/si";
import { SiPlaystation5 } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { SiWindows10 } from "react-icons/si";
import { SiMacos } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";

export function Platforms() {
  return (
    <>
      <div className="h-full bg-[#111112e4] overflow-hidden">
        <div className="mt-14 sm:mt-32 mb-40 sm:mb-60 py-3 flex justify-center bg-[#00000067]">
          <ul className="flex flex-wrap items-center justify-center px-10 md:gap-28 gap-10 md:text-5xl text-4xl text-gray-300">
            <li className="text-7xl">
              <SiPlaystation4 />
            </li>
            <li className="text-7xl">
              <SiPlaystation5 />
            </li>
            <li>
              <SiXbox />
            </li>
            <li>
              <SiWindows10 />
            </li>
            <li className="md:text-8xl text-7xl">
              <SiMacos />
            </li>
            <li>
              <FaAppStoreIos />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

