const container = "xl:w-[48%] md:w-[80%] ";
const liStyle = "flex items-center gap-2";
const inputStyle = "w-5 aspect-square accent-[#f446b1] cursor-pointer";
const labelStyle = "text-xl";
const fieldsetStyle = `text-[#fffffff7] flex flex-col gap-4 my-3 mx-2`;
const questionsH2Style = `relative text-[#ffffffef] font-medium text-2xl sm:text-[1.6rem] lg:text-2xl uppercase mt-3 mb-8 mx-2 after:content-[''] after:absolute after:w-[30%] after:h-0.5 after:-bottom-4 after:left-0 after:bg-[#ffffffc6]`;
import { QuestionProps } from "../../../Types";

export function Question(props: QuestionProps) {
  return (
    <div className={container}>
      <div className="bg-[#00000092] rounded-md">
        <div className="p-2">
          <h2 className={questionsH2Style}>{props.title}</h2>
          <fieldset className={fieldsetStyle}>
            {props.options.map((option) => (
              <div className={liStyle} key={option.id}>
                <input
                  type="radio"
                  className={inputStyle}
                  name={props.id}
                  value={option.id}
                  id={option.id}
                  checked={props.selectedValue === option.id}
                  onChange={() => {
                    props.onSelect(option.id);
                  }}
                />
                <label className={labelStyle} htmlFor={option.id}>
                  {option.label}
                </label>
              </div>
            ))}
          </fieldset>
        </div>
      </div>
    </div>
  );
}

