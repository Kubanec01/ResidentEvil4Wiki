import "./ScrollImages.css";
import data from "../../../../data/imagesData";
import { useInterval } from "../../../../hooks/useInterval";


export function ScrollImages() {

  const index = useInterval()

  return (
    <section className="all-char lg:w-[31.875rem] sm:w-[28.75rem] w-[17.875rem]">
      <div className="all-char-content">
        {data.map((ch, currIndex) => {
          let mainClass = "right-slide";

          if (currIndex === index) {
            mainClass = "active-slide";
          }

          if (
            currIndex === index - 1 ||
            (index === 0 && currIndex === data.length - 1)
          ) {
            mainClass = "left-slide";
          }

          return (
            <img
              className={mainClass}
              key={ch.id}
              src={ch.image}
              alt="character-img"
            />
          );
        })}
      </div>
    </section>
  );
}
