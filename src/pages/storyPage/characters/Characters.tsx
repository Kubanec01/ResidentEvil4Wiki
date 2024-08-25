import style from "./characters.module.css";
import charBgImage from "../../../assets/char-bg-img.jpg";
import { CharactersImgs } from "../CharactersImgs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Characters() {
  // STYLES
  const textStyle =
    "text-[#fffffff5] text-[2.5rem] md:text-[3.2rem] leading-[3.2rem] uppercase w-[80%] lg:w-[50%] text-center font-bold";
  const spanStyle = "text-[#f446b1]";
  const textcontainerStyle =
    " w-full flex justify-center items-center mt-40 mx-auto max-w-[100rem]";

  return (
    <>
      <div className="h-full bg-[#000000ec] overflow-hidden">
        {/* TEXT */}
        <div className={textcontainerStyle}>
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
            <div className="sm:mb-24 -mt-10">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-[#fff] text-[10rem] md:text-[12.5rem]"
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
          className=" w-full p-10"
          id="characters"
        >
          <div className={`${style.charText}  w-full`}>
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
                className="text-[2.8rem] md:text-[3.2rem] uppercase text-[#fffffff5] font-bold pl-12 lg:pr-8 pt-6"
              >
                <span>hell</span> or <span>heaven</span>...you will be on one of
                them <br />
                <span>sooner</span> or <span>later</span>.
              </motion.h2>
            </div>
            {/* CHARACTERS IMAGES */}
            <div className="py-24 max-w-[118.75rem]">
              <ul>
                <CharactersImgs />
              </ul>
            </div>
          </div>
          {/* TEXT 2 */}
          <div className=" w-full flex justify-center items-center mb-20 mx-auto max-w-[93.75rem]">
            <div className=" p-4 w-full flex justify-center items-center my-7 mx-auto flex-col">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`${textStyle} sm:leading-[3.6rem]`}
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
