import axios from "axios";
import jsCookie from "js-cookie";
import React, { useContext, useEffect } from "react";
import { Context } from "./context/Context";

export const Lists = () => {
  const { input, values, setValue } = useContext(Context);
  useEffect(() => {
    const getAllList = async () => {
      let result = await axios.get(`http://94.74.86.174:8080/api/checklist`, {
        headers: { Authorization: "Bearer " + jsCookie.get("token") },
      });
      console.log(result.data.data);
    };
    getAllList();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://94.74.86.174:8080/api/checklist`,
        { name: values.name },
        {
          headers: { Authorization: "Bearer " + jsCookie.get("token") },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  const handleChange = (event) => {
    let itemChange = event.target;
    let { name, value } = itemChange;
    setValue({ ...values, [name]: value });
  };
  return (
    <div>
      <div className="container">
        <div className="w-1/3 px-4">
          {/* {
                result.data.data.map((element, idx) => (
                    <ul>
                        <li>

                        </li>
                    </ul>
                ))
            } */}
          <form action="" method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
            <button className="text-base font-semibold text-white bg-sky-600 py-3 px-4  w-20 hover:opacity-80 hover:shadow-lg transition duration-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
