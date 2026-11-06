import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Home from "./pages/Home";
import GeneralTreatments from "./pages/GeneralTreatments";
import SkinTherapies from "./pages/SkinTherapies";
import HairCare from "./pages/HairCare";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => document.querySelector(hash)?.scrollIntoView({behavior:"smooth"}), 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo({top:0, behavior:"instant"});
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return <><ScrollToTop/><Header/><main><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/general-treatments" element={<GeneralTreatments/>}/>
    <Route path="/skin-therapies" element={<SkinTherapies/>}/>
    <Route path="/hair-care" element={<HairCare/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></main><Footer/><FloatingActions/></>;
}
