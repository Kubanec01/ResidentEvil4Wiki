import { UseScrollToTop } from "./hooks/UseScrollToTop";
import { NavBar } from "./components/navbar/NavBar";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <UseScrollToTop />
      <NavBar />
      <MainRoutes />
    </>
  );
}

export default App;