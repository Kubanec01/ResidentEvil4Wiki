import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "./Image";
import { Page } from "./Page";
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

