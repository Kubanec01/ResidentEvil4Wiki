import styles from "./imagecCart.module.css";

type Props = {
  name: string;
  image: string;
};

export function CharacterCart({ name, image }: Props) {
  return (
    <>
      <li className="relative md:mx-5 mx-4 inline-block h-[18.75rem] md:w-[18.75rem]">
        <div
          className={`${styles.imgText} p-5 absolute flex h-full w-full flex-col items-center justify-center bg-[#d63ab2c8] text-center text-white text-2xl`}
        >
          <p>{name}</p>
        </div>
        <img
          style={{
            border: "4.2px solid",
          }}
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={`${image}`}
        />
      </li>
    </>
  );
}
