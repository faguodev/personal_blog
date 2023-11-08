import * as React from "react";
import { RouteNames } from "./RouteNames";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BlogSite } from "../sites/BlogSite";
import { AboutMeSite } from "../sites/AboutMeSite";
import { Navbar } from "../ui/Navbar";

export const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={RouteNames.ROOT} element={<BlogSite />} />
      <Route path={RouteNames.ABOUT_ME} element={<AboutMeSite />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
