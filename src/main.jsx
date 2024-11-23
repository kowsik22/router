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
import Features from "./components/Features/Features.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import ProtectedRoute from "./components/Protected/Protected.jsx";

const NotFound = () => (
  <div className="text-center text-2xl  justify-center  mt-20 ">
    <h1 className="text-7xl mb-40">
      <span className="text-gray-700">Wel</span>
      <span className="text-red-600">come</span>🙏
    </h1>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="company"
        element={
          <ProtectedRoute>
            <Company />
          </ProtectedRoute>
        }
      />
      <Route
        path="user"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="Focus" element={<FocusMode />} />
      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="i"
        element={
          <ProtectedRoute>
            <Insights />
          </ProtectedRoute>
        }
      />
      <Route
        path="rewards"
        element={
          <ProtectedRoute>
            <Gamefication />
          </ProtectedRoute>
        }
      />
      <Route
        path="features"
        element={
          <ProtectedRoute>
            <Features />
          </ProtectedRoute>
        }
      />
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
