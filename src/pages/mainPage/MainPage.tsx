import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "./components/Image";
import { Page } from "./components/Page";
import { Footer } from "../../components/footer/Footer";

export function MainPage() {
  return (
    <>
      <Image />
      <Page />
      <Footer />
    </>
  );
}

