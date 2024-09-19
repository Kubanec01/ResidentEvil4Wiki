import { Footer } from "../../components/footer/Footer";
import image5 from "../../assets/image5.jpg"
import { QuizGame } from "./components/quizGame/QuizGame";
import { ContactBars } from "./components/contactBars/ContactBars";



export function QuizPage() {
  return (
      <div
        className="h-full"
        style={{
          backgroundImage: `url(${image5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <QuizGame />
        <ContactBars />
        <Footer />
      </div>
  );
}
