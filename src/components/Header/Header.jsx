import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import logo from "../../assets/logo.png";

export default function Header() {
  const { user, setUser } = useUser();
  let navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // This will also clear localStorage via UserContext
    navigate("/login");
  };

  return (
    <header className="shadow sticky z-50   top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/home" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-white hover:bg-blue-400 bg-blue-500 border-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
            )}
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {user ? (
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/company"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/features"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/user"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/rewards"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    rewards
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/focus"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    FocusMode
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/i"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Insights
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    rewards
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    FocusMode
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Insights
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
