import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Company from "./components/Company/Company.jsx";
import Home from "./components/Home/Home.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Company" element={<Company />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" elelment={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="Github" element={<Github />} />
      <Route
        path="*"
        element={<div>Page is under progress will comeback soon</div>}
      />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
