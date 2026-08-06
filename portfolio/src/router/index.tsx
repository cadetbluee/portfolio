import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop";

const AppRouter = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
    <Footer />
    <ScrollToTopButton />
  </Router>
);

export default AppRouter;
