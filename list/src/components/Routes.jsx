import jsCookie from "js-cookie";
import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ContextProvider } from "./context/Context";
import { Lists } from "./Lists";
export const Routes = () => {
  let history = useHistory();
  return (
    <>
      <Router>
        <ContextProvider>
          <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <a href="https://flowbite.com" className="flex items-center">
                {/* <img
                src="/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              /> */}
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  TO DO LIST
                </span>
              </a>
              <div className="flex md:order-2">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get started
                </button>
                <button
                  data-collapse-toggle="mobile-menu-4"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-4"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-4"
              >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  {jsCookie.get("token") && (
                    <li>
                      <Link
                        to="/lists"
                        className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      >
                        Lists
                      </Link>
                    </li>
                  )}
                  <li>
                    {!jsCookie.get("token") && (
                      <Link
                        to="/registrasi"
                        className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      >
                        Register
                      </Link>
                    )}
                  </li>
                  <li>
                    {!jsCookie.get("token") ? (
                      <li class="group">
                        <Link
                          to="/"
                          className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        >
                          Login
                        </Link>
                      </li>
                    ) : (
                      <li class="group">
                        <Link
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          onClick={() => {
                            jsCookie.remove("token");
                            history.push("/");
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/registrasi" exact>
              <Register />
            </Route>
            <Route path="/lists" exact>
              <Lists />
            </Route>
          </Switch>
        </ContextProvider>
      </Router>
    </>
  );
};
