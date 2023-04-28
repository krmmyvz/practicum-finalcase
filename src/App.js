import { Route, Routes } from "react-router-dom";
import NotFound from "./content/NotFound/NotFound";
import "./App.css";
import Home from "./content/Home/Home";
import Header from "./content/Header/Header";
import Results from "./content/Results/Results";
import Details from "./content/Details/Details";
import { useEffect } from "react";
import Footer from "./content/Footer/Footer";
function App() {
  // appHeight() fonksiyonu List içindeki bileşenin yüksekliğini ayarlayacak state'i tanımlar
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  // useEffect fonksiyonu bileşen ilk render edildiğinde appHeight() fonksiyonunu çağırır

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []); //=> useEffect fonksiyonu sadece bir kez çağırır

  return (
    <>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/starships" Component={Results} />
        <Route exact path="/404" Component={NotFound} />
        <Route exact path="/starships/:slug" Component={Details} />
        <Route exact path="*" Component={NotFound} />
      </Routes>
    </div>
    <Footer/>
    </>

  );
}

export default App;
