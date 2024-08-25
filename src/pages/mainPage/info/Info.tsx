import { useTypewriter, Cursor } from "react-simple-typewriter";
import style from "./info.module.css";
import { Review } from "../reviewAndQuiz/ReviewAndQuiz";
import infoImg from "../../../assets/info-img.jpg";
import { ScrollImages } from "../scrollImages/ScrollImages";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Info() {
  const { t } = useTranslation();
  const [text] = useTypewriter({
    words: ["Friends", "Enemies", "Creatures!"],
    loop: true,
    typeSpeed: 140,
    deleteSpeed: 70,
  });

  return (
    <div className="h-full bg-[#111112e4]">
      <div className="items-center flex flex-col gap-2 justify-center px-6">
        {/* CHARACTERS */}
        <div className="w-full max-w-[73.125rem] mx-auto relative">
          <div
            style={{
              backgroundImage: `url(${infoImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "6px 6px 0 0",
            }}
            className="w-full h-[62.5rem] md:h-[53.125rem] lg:h-[37.5rem] p-10 flex flex-nowrap justify-center"
          >
            <div className=" w-full block">
              <h1 className=" text-gray-200 text-6xl lg:text-7xl font-bold uppercase mb-14">
                Meet up with <br />
                <span>{text}</span>
                <span>
                  <Cursor />
                </span>
              </h1>
              <p
                className="text-gray-200 relative text-xl lg:text-[1.25rem] max-w-[30rem] my-6 before:content-['']
               before:absolute before:h-[.1rem] before:w-[26%] before:bg-[#ffffff88] before:-top-3 before:left-0
               after:absolute after:content-[''] after:-bottom-5 after:left-0 after:w-[70%] after:h-[.1rem] after:bg-[#ffffff88] 
               "
              >
                {t("Home.meetUpText")}
              </p>
              <div className="mt-24">
                <Link to="/story">
                  <button
                    className={`${style.button} text-gray-200 text-xl font-medium p-[0.625rem]`}
                  >
                    More About Characters
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <ScrollImages />
          </div>
        </div>
        {/* REVIEWS N QUIZ */}
        <Review />
      </div>
    </div>
  );
}

