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
import Login from "./components/Login/Login.jsx";
import User from "./components/User/User.jsx";
import Insights from "./components/Insights/Insights.jsx";
import Settings from "./components/Settings/Settings.jsx";
import FocusMode from "./components/Focus/Focus.jsx";
import Gamefication from "./components/Gamification/Gamefication.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import { UserProvider } from "./Context/UserContext.jsx";

const NotFound = () => (
  <div className="text-center text-2xl  justify-center mb-19 mt-12 ">
    <h1 className="text-8xl">Welcome🙏</h1>
    <h1>Please Login to access the website</h1>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="company" element={<Company />} />
      <Route path="user" element={<User />} />
      <Route path="Focus" element={<FocusMode />} />
      <Route path="settings" element={<Settings />} />
      <Route path="i" element={<Insights />} />
      <Route path="rewards" element={<Gamefication />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
