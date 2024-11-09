import leonImg from "../../../assets/leon-char.jpg";
import osmundImg from "../../../assets/osmund-char.jpg";
import adaImg from "../../../assets/ada-char.webp";
import ashleyImg from "../../../assets/ashley-char.jpg";
import luisImg from "../../../assets/luis-char.webp";
import hunkImg from "../../../assets/hunk-char.jpg";
import salazarImg from "../../../assets/salazar-char.webp";
import krauserImg from "../../../assets/krauser-char.webp";
import bitoresImg from "../../../assets/bitores-char.jpg";
import { CharType } from "../../../Types";
import { CharacterCart } from "./characterCart/CharacterCart";

const characters: Array<CharType> = [
  {
    name: "Leon S. Kennedy",
    image: leonImg,
  },
  {
    name: "Ashley Graham",
    image: ashleyImg,
  },
  {
    name: "Osmund Saddler",
    image: osmundImg,
  },
  {
    name: "Ada Wong",
    image: adaImg,
  },
  {
    name: "Luis Sera",
    image: luisImg,
  },
  {
    name: "HUNK",
    image: hunkImg,
  },
  {
    name: "Ramon Salazar",
    image: salazarImg,
  },
  {
    name: "Jack Krauser",
    image: krauserImg,
  },
  {
    name: "Bitores Mendez",
    image: bitoresImg,
  },
];

export function CharactersImgs() {
  return (
    <>
      <section className="w-full flex flex-row flex-wrap md:gap-20 gap-10 items-center xl:justify-start justify-center mx-auto md:p-6 pl-0">
        {characters.map((item: CharType, index) => (
          <CharacterCart
            key={`${item.name}-${index}`}
            name={item.name}
            image={item.image}
          />
        ))}
      </section>
    </>
  );
}
