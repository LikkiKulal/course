import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CourseHomePage from "./pages/CourseHomePage";

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let title = "";
    let Description = "";

    switch (pathname) {
      case "/":
        title = "Home";
        Description = "This is the homepage";
        break;
      default:
        title = "Page Not Found";
        Description = "The requested page does not exist";
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = Description;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CourseHomePage />} />
      {/* Add more routes here if needed */}
    </Routes>
  );
}

export default App;
