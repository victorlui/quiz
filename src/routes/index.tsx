import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Level from "../pages/level";
import Quiz from "../pages/quiz";
import Results from "../pages/results";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/level" element={<Level />} />
      <Route path="/quiz/:level" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default Router;
