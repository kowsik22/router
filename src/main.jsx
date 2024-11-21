// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import About from "./components/About/About.jsx";
// import Company from "./components/Company/Company.jsx";
// import Home from "./components/Home/Home.jsx";
// import Login from "./components/Login/Login.jsx";
// import User from "./components/User/User.jsx";
// import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
// import { UserProvider } from "./Context/UserContext.js";
// let router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="About" element={<About />} />
//       <Route path="Company" element={<Company />} />
//       <Route path="login" element={<Login />} />
//       <Route path="user/" element={<User />}>
//         <Route path=":userid" elelment={<User />} />
//       </Route>
//       <Route loader={githubInfoLoader} path="Github" element={<Github />} />
//       <Route
//         path="*"
//         element={<div>Page is under progress will comeback soon</div>}
//       />
//     </Route>
//   )
// );
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <UserProvider>
//       <RouterProvider router={router} />
//     </UserProvider>
//   </StrictMode>
// );

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
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import { UserProvider } from "./Context/UserContext.jsx";

const NotFound = () => <div>Page is under progress, will come back soon.</div>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="company" element={<Company />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<User />} />
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
