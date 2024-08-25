import { useState, useEffect } from "react";
import "./ScrollImages.css";
import data from "../../../data/imagesData";

export function ScrollImages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(data.length - 1);
    } else if (index > data.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="all-char w-[21.875rem] sm:w-[28.75rem] lg:w-[31.875rem]">
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
