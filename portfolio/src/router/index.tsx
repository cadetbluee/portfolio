import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PushOfLifePage from "../pages/PushOfLifePage";
import Header from "../layouts/Header/Header";
import AllEatPage from "../pages/AllEatPage";
import FleaOnPage from "../pages/FleaOnPage";
import MeovaPage from "../pages/MeovaPage";
const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/pushoflife" element={<PushOfLifePage />} />
      <Route path="/project/alleat" element={<AllEatPage />} />
      <Route path="/project/fleaon" element={<FleaOnPage />} />
      <Route path="/project/meova" element={<MeovaPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
