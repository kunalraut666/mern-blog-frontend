import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { Projects } from "./pages/Projects";
import Education from "./pages/Education";
import CertificatePage from "./pages/CertificatePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Navbar />
        <div className="max-w-screen-md mx-auto pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles-list" element={<ArticlesList />} />
            <Route path="/article/:name" element={<Article />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<CertificatePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
