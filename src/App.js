import { Route, Routes } from "react-router-dom";
import NotFound from "./content/NotFound/NotFound";
import "./App.css";
import Home from "./content/Home/Home";
import Header from "./content/Header/Header";
import Results from "./content/Results/Results";
import Details from "./content/Details/Details";
function App() {
  return (
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
  );
}

export default App;
