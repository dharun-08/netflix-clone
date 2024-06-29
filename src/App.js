import "./App.css";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import NetflixShowCont from "./pages/NetflixShowCont";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netflix-show-content" element={<NetflixShowCont />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
