import style from "./review.module.css";
import Reviews from "../../../../assets/reviews.title.img.png";
import quote from "../../../../assets/quotes.png";
import quote2 from "../../../../assets/quotes2.png";
import platformsImg from "../../../../assets/platforms-img.jpg";
import ReviewImg from "../../../../assets/rewiev-img.avif";
import quizImg from "../../../../assets/Quiz-img.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ReviewAndQuiz() {
  const { t } = useTranslation();

  // STYLES
  const reviewsLiStyle =
    "sm:text-2xl md:mb-1 mb-2 lg:text-xl text-lg text-gray-300 z-50 md:font-medium";
  const buttonStyle = "text-gray-200 md:text-xl text-lg md:px-4 px-3 md:py-2 py-2 md:font-medium";
  const quizLiStyle =
    "flex items-center gap-2 text-white text-sm font-medium";
  const quizUlStyle = `my-8 flex relative flex-col gap-2 before:content-[''] before:w-[24%] before:h-[.16rem] before:bg-[#ffffff91]
            before:absolute before:-top-4 before:left-1
             after:content-[''] after:w-[80%] after:h-[.1rem] after:absolute after:-bottom-4 after:right-2 after:bg-[#ffffff91]`;

  return (
    <>
      <div className="w-full max-w-[73.125rem] mx-auto mb-24 flex flex-col lg:flex-row justify-between gap-2">
        {/* REVIEWS */}
        <div
          style={{
            backgroundImage: `url(${ReviewImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0 0 0 6px",
          }}
          className="lg:w-[50%] lg:h-[580px] h-[490px] flex flex-nowrap justify-center"
        >
          <div className="relative block h-full w-[85%]">
            <img
              className="md:w-[28.125rem] w-[14.125rem] mb-7 mt-2"
              src={Reviews}
              alt="Reviews-img"
            />
            <ul className="text-right">
              <li className={reviewsLiStyle}>{t("Reviews.1")}</li>
              <li className={reviewsLiStyle}>{t("Reviews.2")}</li>
              <li className={reviewsLiStyle}>{t("Reviews.3")}</li>
              <li className={reviewsLiStyle}>{t("Reviews.4")}</li>
              <li className={reviewsLiStyle}>{t("Reviews.5")}</li>
              <li className={reviewsLiStyle}>{t("Reviews.6")}</li>
              <p className="text-md text-gray-300 font-normal">
                (source: www.pcgamer.com)
              </p>
            </ul>
            <div className="w-full">
              <button
                className={`${style.button} ${buttonStyle} mt-10 sm:mt-0 lg:mt-24`}
              >
                <a
                  href="https://www.pcgamer.com/resident-evil-4-remake-review/"
                  target="_blank"
                >
                  Read More
                </a>
              </button>
            </div>
            <img
              className="absolute w-[4.2rem] z-10 opacity-30 sm:opacity-80 md:top-[9.375rem] top-[5.2rem] md:right-[11.125rem] right-[9.25rem]"
              src={quote}
              alt="quote-img"
            />
            <img
              className="absolute w-[4.2rem] opacity-30 sm:opacity-80 md:bottom-[1.875rem] bottom-[3.5rem] lg:bottom-[9.375rem] right-[0] sm:right-[-1.25rem]"
              src={quote2}
              alt="quote2-img"
            />
          </div>
        </div>
        {/* QUIZ */}
        <div
          style={{
            backgroundImage: `url(${platformsImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0 0 6px 0",
          }}
          className="lg:w-[50%] md:h-[500px] h-[480px] lg:h-[36.25rem] flex flex-nowrap justify-center"
        >
          <div className="block h-full w-[85%]">
            <img
              className="md:w-[300px] w-[50%] md:mt-0 mt-2 md:-ml-0 -ml-1 lg:mb-3 opacity-95"
              src={quizImg}
              alt="quiz-img"
            />
            <h2 className="text-white md:text-2xl text-lg w-[98%] md:mb-4 mb-5 md:font-medium">
              {t('Quiz.quizTitle')}
            </h2>
            <ul className={quizUlStyle}>
              <li className={quizLiStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${style.icons}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
                SHOW YOUR SKILLS
              </li>
              <li className={quizLiStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${style.icons}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                LEARN NEW THINGS
              </li>
            </ul>
            <div className="w-full mt-14 lg:mt-20">
              <button className={`${style.button} ${buttonStyle}`}>
                <Link to="/quiz">Start Quiz</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
