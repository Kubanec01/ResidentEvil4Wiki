import { ScrollToTop } from "./components/ScrollToTop";
import { NavBar } from "./components/navbar/NavBar";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <MainRoutes />
    </>
  );
}

export default App;