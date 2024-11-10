import style from "./contactBars.module.css";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useTranslation } from "react-i18next";

export function ContactBars() {
  const { t } = useTranslation();
  // BIGGER SCREEN STYLES
  const pStyle = `text-center relative text-2xl before:content-[''] before:bg-[#00000046] 
                  before:w-full before:h-1 before:absolute before:-top-6 before:left-0 after:content[''] 
                  after:bg-[#00000046] after:w-1/3 after:h-1 after:absolute after:-bottom-6 after:right-1/3`;
  const hStyle =
    "text-4xl text-center mt-28 mb-12 font-medium uppercase mx-auto";

  // SMALLER SCREEN STYLES
  const containerSmStyle = `h-full bg-[#ec2e94] cursor-pointer rounded-2xl mb-12 transition duration-400 hover:bg-[#6135A0] hover:text-[#fffffff5]`;
  const barBodySmStyle = "m-10";
  const hSmStyle = "text-3xl text-left font-medium uppercase";
  const pSmStyle = `text-left relative text-xl my-12 before:content-[''] before:bg-[#00000046] 
    before:w-full before:h-1 before:absolute before:-top-6 before:left-0 after:content[''] 
    after:bg-[#00000046] after:w-1/3 after:h-1 after:absolute after:-bottom-6 after:right-1/3`;

  const windowWidth = useWindowWidth();

  const openLink = (link: string) => window.open(link, "_blank");

  return (
    <div className="bg-[#111112ef] w-full lg:h-[45.625rem] xl:h-[43.75rem] flex justify-center overflow-hidden">
      {windowWidth > 1024 ? (
        <>
          <div className=" w-[80%] max-w-[68.75rem] flex gap-3 justify-between">
            <div
              onClick={() => openLink("https://github.com/Kubanec01")}
              style={{
                borderRadius: "20px 20px 0 0",
              }}
              className={`${style.barUp} w-[32%] h-full bg-[#ec2e94] cursor-pointer`}
            >
              <div className="m-10">
                <h1 className={`${hStyle}`}>
                  follow <br />
                  my <br />
                  work <br />
                </h1>
                <p className={pStyle}>{t("contactBars.firstBar")}</p>
              </div>
            </div>
            <div
              onClick={() =>
                openLink("https://www.facebook.com/jakub.roman.351")
              }
              style={{
                borderRadius: "20px 20px 0 0",
              }}
              className={`${style.barDown} w-[32%] h-full bg-[#ec2e94] cursor-pointer`}
            >
              <div className="m-10">
                <h1 className={hStyle}>
                  write <br />
                  more than <br />
                  code <br />
                </h1>
                <p className={pStyle}>{t("contactBars.secondBar")}</p>
              </div>
            </div>
            <div
              onClick={() => openLink("mailto:jakub.z.roman@gmail.com")}
              style={{
                borderRadius: "20px 20px 0 0",
              }}
              className={`${style.barUp} w-[32%] h-full bg-[#ec2e94] cursor-pointer`}
            >
              <div className="m-10">
                <h1 className={hStyle}>
                  contact <br />
                  me
                </h1>
                <p className={pStyle}>{t("contactBars.thirdBar")}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" w-[80%] flex flex-col h-full">
            <div
              onClick={() => openLink("https://github.com/Kubanec01")}
              className={containerSmStyle}
            >
              <div className={barBodySmStyle}>
                <h1 className={hSmStyle}>follow my work</h1>
                <p className={pSmStyle}>
                  Visit my github and follow my works, you can be inspired by
                  them, learn something or teach me something. I am fully open
                  to any questions about my projects or suggestions for their
                  improvement
                </p>
              </div>
            </div>
            <div
              onClick={() =>
                openLink("https://www.facebook.com/jakub.roman.351")
              }
              className={containerSmStyle}
            >
              <div className={barBodySmStyle}>
                <h1 className={hSmStyle}>write more than code</h1>
                <p className={pSmStyle}>
                  Write to me more personally on the social network and exchange
                  experiences, ideas, trends or just sit for a beer. Together we
                  can create clean code and awesome projects
                </p>
              </div>
            </div>
            <div
              onClick={() => openLink("mailto:jakub.z.roman@gmail.com")}
              className={containerSmStyle}
            >
              <div className={barBodySmStyle}>
                <h1 className={hSmStyle}>contact me</h1>
                <p className={pSmStyle}>
                  In case of offers or work opportunities, contact me by email.
                  It will be my pleasure to cooperate on projects with a great
                  future
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
