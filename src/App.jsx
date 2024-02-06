import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent"
// import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import TermPolPage from "./pages/TermPolPage";

function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/class" Component={ClassPage} />
      <Route path="/testimonial" Component={TestimonialPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/termpol" Component={TermPolPage} />
    </Routes>

    {/* <FooterComponent /> */}
  </div>
}

export default App
