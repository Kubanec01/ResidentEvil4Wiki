import { UseScrollToTop } from "./hooks/UseScrollToTop";
import { NavBar } from "./components/navbar/NavBar";
import { MainRoutes } from "./routes/MainRoutes";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <UseScrollToTop />
      <NavBar />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;