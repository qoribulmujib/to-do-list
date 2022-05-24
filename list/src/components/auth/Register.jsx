import React, { useContext } from "react";
import { Context } from "../context/Context";

export const Register = () => {
  const { input, setInput, functionRegister } = useContext(Context);
  const handleChange = (event) => {
    let itemChange = event.target;
    let { name, value } = itemChange;

    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    functionRegister();
  };
  return (
    <div className="container">
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="font-bold text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
            Register{" "}
          </h2>
        </div>
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 mb-8">
            <label htmlFor="name" className="text-base text-primary font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label
              htmlFor="username"
              className="text-base text-primary font-bold"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={input.username}
              onChange={handleChange}
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label
              htmlFor="password"
              className="text-base text-primary font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              // maxLength="8"
              minLength="1"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4">
            <button className="text-base font-semibold text-white bg-sky-600 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
