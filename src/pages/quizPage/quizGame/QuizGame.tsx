import { FormEvent, ReactNode, useState } from "react";
import { Question } from "../Question";
import style from "./quizGame.module.css";

// STYLES
const spanStyle = "text-[#f446b1]";
const resultTitle =
  "text-white text-[2rem] lg:text-[2.6rem] uppercase pr-10 mb-6 lg:mb-0";
const quizButton =
  "text-2xl lg:text-3xl w-[6rem] lg:w-[7rem] h-[3.3rem] lg:h-[3.6rem] rounded-sm";

const questions = [
  {
    id: "age",
    title: (
      <>
        how old is <span className={spanStyle}>leon s. kennedy</span> in{" "}
        <span className={spanStyle}>r</span>esident{" "}
        <span className={spanStyle}>e</span>vil 4?
      </>
    ),
    correctOption: "27",
    options: [
      {
        id: "27",
        label: "27 years old",
      },
      {
        id: "21",
        label: "21 years old",
      },
      {
        id: "25",
        label: "25 years old",
      },
      {
        id: "26",
        label: "26 years old",
      },
    ],
  },
  {
    id: "first-boss",
    title: (
      <>
        what is the <span className={spanStyle}>name</span> of the{" "}
        <span className={spanStyle}>first boss</span> you fight?
      </>
    ),
    correctOption: "del-lago",
    options: [
      {
        id: "el-gigante",
        label: "El Gigante",
      },
      {
        id: "garrador",
        label: "Garrador",
      },
      {
        id: "verdugo",
        label: "Verdugo",
      },
      {
        id: "del-lago",
        label: "Del Lago",
      },
    ],
  },
  {
    id: "merchant",
    title: (
      <>
        How many <span className={spanStyle}>requests</span> does the{" "}
        <span className={spanStyle}>Merchant</span> have?
      </>
    ),
    correctOption: "19",
    options: [
      {
        id: "14",
        label: "14",
      },
      {
        id: "21",
        label: "21",
      },
      {
        id: "19",
        label: "19",
      },
      {
        id: "18",
        label: "18",
      },
    ],
  },
  {
    id: "woman",
    title: (
      <>
        which of the women <span className={spanStyle}>appeared</span> in the{" "}
        <span className={spanStyle}>game</span>?
      </>
    ),
    correctOption: "ada-wong",
    options: [
      {
        id: "jill-valentine",
        label: "Jill Valentine",
      },
      {
        id: "claire-redfield",
        label: "Claire Redfield",
      },
      {
        id: "ada-wong",
        label: "Ada Wong",
      },
      {
        id: "Rosemary Winters",
        label: "Rosemary Winters",
      },
    ],
  },
] as const;

export function QuizGame() {
  const [values, setValues] = useState<
    Partial<Record<(typeof questions)[number]["id"], string>>
  >({});

  console.log(values);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const winTitle = () => {
      return (
        <h2 className={resultTitle}>
          Hell yeah, you are really like a{" "}
          <span className={spanStyle}>pro</span>!
        </h2>
      );
    };

    const loseTitle = () => {
      return (
        <h2 className={resultTitle}>
          Oops, you got it <span className={spanStyle}>wrong</span>...keep
          trying baby!
        </h2>
      );
    };

    const isWin = questions.every(
      (question) => values[question.id] === question.correctOption
    );

    if (isWin) {
      setResult(winTitle());
      return;
    }

    setResult(loseTitle());
  };

  const [result, setResult] = useState<ReactNode>(null);

  const handleRestart = (event: FormEvent) => {
    event.preventDefault();

    setResult(null);
    setValues({});
  };

  return (
    <div className="pt-44 w-full h-ll bg-[#111112ef] overflow-hidden">
      {/* QUIZ CONTAINER */}
      <div className="h-full w-full mb-44">
        {/* H1 BODY */}
        <div className="w-[80%] max-w-[93.75rem] mx-auto flex justify-center">
          {/* h1 container */}
          <div className=" w-full mt-16 mb-28 flex justify-center">
            <h1 className="text-[#ffffffef] text-[2.6rem] lg:text-5xl xl:text-6xl font-bold lg:w-[80%] md:leading-[4rem] uppercase text-center">
              welcome to a <span className={spanStyle}>little quiz game</span>!{" "}
              <br />
              test your knowledge and memory in a{" "}
              <span className={spanStyle}>short test</span> focused on{" "}
              characters, <span className={spanStyle}>weapons</span> and{" "}
              <span className={spanStyle}>locations</span>.
            </h1>
          </div>
        </div>
        <form
          className="xl:w-[80%] max-w-[93.75rem] mx-auto flex flex-col xl:flex-row flex-wrap p-8 gap-2  items-center justify-center bg-[#00000040]"
          onSubmit={handleSubmit}
        >
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                id={question.id}
                title={question.title}
                options={question.options}
                onSelect={(answer) =>
                  setValues((curr) => ({ ...curr, [question.id]: answer }))
                }
                selectedValue={values[question.id] || null}
              />
            );
          })}
          <div className="w-[90%] sm:w-[84%] xl:w-full p-4 lg:flex justify-between">
            <div className="w-full">{result}</div>
            <div className="flex gap-14">
              <button
                onClick={handleRestart}
                style={{
                  borderRadius: "2px 8px 2px 8px",
                }}
                className={`${style.buttonTwo} ${quizButton}`}
              >
                Restart
              </button>
              <button
                type="submit"
                style={{
                  borderRadius: "8px 2px 8px 2px",
                }}
                className={`${style.buttonOne} ${quizButton}`}
              >
                Check
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
