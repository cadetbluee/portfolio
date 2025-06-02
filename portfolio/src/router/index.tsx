import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PushOfLifePage from "../pages/PushOfLifePage";
import Header from "../layouts/Header/Header";
import AllEatPage from "../pages/AllEatPage";
import FleaOnPage from "../pages/FleaOnPage";
import MeovaPage from "../pages/MeovaPage";
import Footer from "../layouts/Footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop";
const AppRouter = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/pushoflife" element={<PushOfLifePage />} />
      <Route path="/project/alleat" element={<AllEatPage />} />
      <Route path="/project/fleaon" element={<FleaOnPage />} />
      <Route path="/project/meova" element={<MeovaPage />} />
    </Routes>
    <Footer />
    <ScrollToTopButton />
  </Router>
);

export default AppRouter;
