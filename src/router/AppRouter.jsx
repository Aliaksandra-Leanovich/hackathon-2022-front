import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { AllCorsesPage } from "../pages/AllCorsesPage/AllCorsesPage";
import { ContactPage } from "../pages/ContactPage/ContactPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { TestPage } from "../pages/TestPage/TestPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/hackathon-2022-front" element={<MainTemplate />}>
        <Route path="/hackathon-2022-front" element={<HomePage />}></Route>
        <Route
          path="/hackathon-2022-front/login"
          element={<LoginPage />}
        ></Route>
        <Route
          path="/hackathon-2022-front/about"
          element={<AboutPage />}
        ></Route>
        <Route
          path="/hackathon-2022-front/all-corses"
          element={<AllCorsesPage />}
        ></Route>
        <Route path="/hackathon-2022-front/test" element={<TestPage />}></Route>
        <Route
          path="/hackathon-2022-front/contact"
          element={<ContactPage />}
        ></Route>
      </Route>
    </Routes>
  );
};
