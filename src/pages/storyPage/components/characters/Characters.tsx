import style from "./characters.module.css";
import charBgImage from "../../../../assets/char-bg-img.jpg";
import { CharactersImgs } from "../../components/CharactersImgs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Characters() {
  // STYLES
  const textStyle =
    "text-[#fffffff5] md:text-[3.2rem] md:leading-[3.2rem] text-3xl uppercase lg:w-[50%] w-[80%] md:text-center text-left md:pl-0 pl-2 font-bold";
  const spanStyle = "text-[#f446b1]";
  const textContainerStyle =
    " w-full flex justify-center items-center mt-40 mx-auto max-w-[100rem]";

  return (
    <>
      <div className="h-full bg-[#000000ec] overflow-hidden">
        {/* TEXT */}
        <div className={textContainerStyle}>
          <div className="w-full flex justify-center items-center my-7 mb-24 mx-auto flex-col relative">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className={textStyle}
            >
              Get to know the <span className={spanStyle}>characters</span> who
              will accompany you on your way to the{" "}
              <span className={spanStyle}>murky dark end</span>. <br />
              applies only to main <span className={spanStyle}>characters</span>
              .
            </motion.h1>
            <div className="sm:mb-24 md:-mt-10 -mt-0">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-[#fff] md:text-[12.5rem] text-[7rem]"
              >
                ↓
              </motion.h2>
            </div>
          </div>
        </div>
        {/* CHARACTERS */}
        <div
          style={{
            backgroundImage: `url(${charBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "",
          }}
          className=" w-full md:p-10 p-2"
          id="characters"
        >
          <div className={`${style.charText} w-full max-w-[2000px] mx-auto `}>
            {/* TEXT */}
            <div className="w-full xl:w-[70%]">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="lg:text-[3.2rem] md:text-[2.4rem] text-[1.8rem] md:mb-0 mb-10 uppercase text-[#fffffff5] font-bold md:pl-12 pl-2 lg:pr-8 pr-4 md:pt-6 pt-8"
              >
                <span>hell</span> or <span>heaven</span>...you will be on one of
                them <br />
                <span>sooner</span> or <span>later</span>.
              </motion.h2>
            </div>
            {/* CHARACTERS IMAGES */}
            <div className="md:py-24 py-14 max-w-[118.75rem]">
              <ul>
                <CharactersImgs />
              </ul>
            </div>
          </div>
          {/* TEXT 2 */}
          <div className=" w-full flex justify-center items-center mb-20 mx-auto max-w-[93.75rem]">
            <div className="md:p-4 w-full flex justify-center md:items-center md:mt-0 mt-14 my-7 mx-auto flex-col">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`${textStyle} md:leading-[3.6rem]`}
              >
                Test your <span className={spanStyle}>memory</span> and prove
                that you are a real master of
                <span className={spanStyle}> knowledge</span> in a short{" "}
                <motion.span
                  initial={{ color: "#ff69b4" }}
                  animate={{ color: "#8a2be2" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className={spanStyle}
                >
                  <Link className="underline" to="/quiz">
                    quiz
                  </Link>
                </motion.span>
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
