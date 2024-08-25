import { Footer } from "../../components/footer/Footer";
import image5 from "../../assets/image5.jpg";
import { Characters } from "./characters/Characters";
import { Story } from "./story/Story";

export function StoryCharactersPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${image5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Story />
      <Characters />
      <Footer />
    </div>
  );
}
