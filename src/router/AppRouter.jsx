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
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/all-corses" element={<AllCorsesPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Route>
    </Routes>
  );
};
