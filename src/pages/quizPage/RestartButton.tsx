import style from "../../styles/restartButton.module.css"

export function RestartButton() {

    return (
        <button
        style={{
          borderRadius: "2px 8px 2px 8px",
        }}
        className={`${style.buttonTwo} text-3xl  w-[7rem] h-[3.6rem] rounded-sm`}
      >
        Restart
      </button>
    )
}