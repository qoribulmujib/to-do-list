import axios from "axios";
import jsCookie from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Context = createContext();
export const ContextProvider = (props) => {
  let history = useHistory();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [values, setValue] = useState({
    name: "",
  });
  const functionRegister = () => {
    let temp = {
      email: input.email,
      password: input.password,
      username: input.username,
    };
    console.log("temp Email", temp);
    axios
      .post(`http://94.74.86.174:8080/api/register`, temp)
      .then((response) => {
        console.log("response =>", response);
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const functionsLogin = () => {
    let tempData = {
      username: input.username,
      password: input.password,
    };
    console.log("temp Data =>", tempData);
    axios
      .post(`http://94.74.86.174:8080/api/login`, tempData)
      .then((response) => {
        console.log(response);
        let token = response.data.data.token;
        jsCookie.set("token", token, { expires: 1 });
      });
  };
  let dummy = 1;
  return (
    <Context.Provider
      value={{
        dummy,
        input,
        setInput,
        functionRegister,
        functionsLogin,
        values,
        setValue,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
