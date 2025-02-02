import { SiGithub } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  const contactUl =
    "md:text-[1.2rem] sm:text-lg underline mb-1 transition duration-300 ease-in-out hover:text-white";

  return (
    <>
      <footer
        id="footer"
        className="bg-[#000000ef] xl:h-[300px] lg:h-[350px] p-12 overflow-hidden"
      >
        <div className="text-[#ffffffac] w-full h-full flex md:p-4 justify-center items-center">
          <div className="lg:flex justify-between max-w-[1300px] h-full">
            {/* LEFT */}
            <div className="md:p-2 lg:w-[33.33%]">
              <h2 className="md:text-lg text-2xl mb-2">About page:</h2>
              <p className="text-md mb-4 sm:mb-0 md:pr-12">
                This site only works on a project basis. <br />
                You can find information about the characters, an explanation of
                the story or test your knowledge in a short quiz. <br />
                Enjoy.
              </p>
            </div>
            {/* MIDDLE */}
            <div className="w-full lg:w-[33.33%] md:p-2">
              {/* CONTACT PHONE AND MAIL */}
              <div>
                <ul className="md:mb-0 mb-8">
                  <li className={contactUl}>
                    <a href="mailto:jakub.z.roman@gmail.com">
                      jakub.z.roman@gmail.com
                    </a>
                  </li>
                  <li className={contactUl}>
                    <a href="tel:0903871518">+421 903 871 518</a>
                  </li>
                </ul>
              </div>
              {/* CONTACT ICONS */}
              <div className="relative mt-4 sm:mt-10 mb-6 lg:mb-0 lg:after:opacity-0 after:content-[''] after:w-[100%] sm:after:w-[60%] after:h-[2px] after:bg-[#ffffff5c] after:absolute after:-left-1 after:rounded-md">
                <ul
                  className={`${style.ul} flex flex-row md:justify-start justify-center sm:pr-16 flex-wrap`}
                >
                  <li>
                    <a href="https://github.com/Kubanec01" target="blank">
                      <SiGithub />
                    </a>
                  </li>
                  <li>
                    <a href="tel:0903871518">
                      <SiWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/jakub.roman.351"
                      target="blank"
                    >
                      <SiFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/_jay.valendine_/"
                      target="blank"
                    >
                      <SiInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SiLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SiDiscord />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* RIGHT */}
            <div className={`${style.right} lg:w-[33.33%] md:p-2`}>
              <ul>
                <li>
                  <Link to="/story">Read Story</Link>
                </li>
                <li>
                  <Link to="/quiz">Play Quiz</Link>
                </li>
              </ul>
              <div className="w-full -mt-14 lg:mt-2 flex justify-end">
                <Link to="/quiz">
                  <button className={style.button}>Quiz</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
