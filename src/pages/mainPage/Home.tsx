import { useTranslation } from "react-i18next";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.avif";
import image4 from "../../assets/image4.jpg";
import { motion } from "framer-motion";

export function Home() {
  const { t } = useTranslation();

  const animations = {
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5 },
    transitionWithDelay: { delay: 0.2, duration: 0.5 },
  };

  // STYLES
  const imageContainer = "lg:flex w-full lg:w-[90%] mx-auto";
  const imageTextContainer = "w-[80%] p-10 lg:w-1/2 mx-auto text-slate-200";
  const imageText = "text-6xl sm:text-7xl font-bold uppercase shadow-md";
  const imageDescription = "mt-6 text-2xl lg:text-xl shadow-md";
  const image =
    " mx-auto w-[415px] md:w-[600px] h-[500px] object-cover rounded-sm";

  return (
    <>
      {/* HOME CONTAINER */}
      <div className="h-full pb-36 pt-28 flex flex-col gap-20 bg-[#111112e4] overflow-hidden">
        {/* IMAGE 1 */}
        <div className={`${imageContainer} mb-20 lg:mb-0`}>
          <div className={imageTextContainer}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transition}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={imageText}
            >
              Discover unknown <br />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={animations.viewport}
                transition={animations.transition}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-red-800"
              >
                places
              </motion.span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transitionWithDelay}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={imageDescription}
            >
              {t("Home.discoverTitle")}
            </motion.p>
          </div>
          <div className="m-auto">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transition}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={image}
              src={image2}
              alt="image2"
            />
          </div>
        </div>
        {/* IMAGE 2 */}
        <div className={imageContainer}>
          <div className="m-auto">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transition}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={image}
              src={image3}
              alt="image2"
            />
          </div>
          <div className={imageTextContainer}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transition}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-7xl font-bold uppercase shadow-md"
            >
              fight for your
              <br />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={animations.viewport}
                transition={animations.transition}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-red-800"
              >
                life
              </motion.span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transitionWithDelay}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={imageDescription}
            >
              {t("Home.fightForLifeTitle")}
            </motion.p>
          </div>
        </div>
        {/* IMAGE 3 */}
        <div className={`${imageContainer} mb-24 lg:mb-0`}>
          <div className={imageTextContainer}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transition}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={imageText}
            >
              It goes better <br />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={animations.viewport}
                transition={animations.transition}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-red-800"
              >
                together
              </motion.span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transitionWithDelay}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={imageDescription}
            >
              {t("Home.betterTogetherTitle")}
            </motion.p>
          </div>
          <div className="m-auto">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={animations.viewport}
              transition={animations.transition}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className={image}
              src={image4}
              alt="image2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
