import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import SignupPage from "./components/SignupPage";
import GetirFoodPage from "./components/GetirFoodPage";
import GetirMorePage from "./components/GetirMorePage";
import GetirWaterPage from "./components/GetirWaterPage";
import GetirLocalsPage from "./components/GetirLocalsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CategoriesSection />
                <DownloadSection />
              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/food" element={<GetirFoodPage />} />
          <Route path="/more" element={<GetirMorePage />} />
          <Route path="/water" element={<GetirWaterPage />} />
          <Route path="/locals" element={<GetirLocalsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
