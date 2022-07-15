import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InputForm() {
  const [values, setValues] = useState({});

  const onInputChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {};
  return (
    <div
      className={`block w-100 mt-10 p-6 rounded-lg shadow-awsm bg-white py-4`}
    >
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-between">
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 mr-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:outline-none"
            id="link"
            placeholder="Shorten a link here..."
            value={values.link}
            name="link"
            onChange={onInputChange}
            required
          />
          <button
            type="submit"
            className="px-5 py-3 w-40 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 transition duration-150 ease-in-out"
          >
            Shorten It!
          </button>
        </div>
      </form>
    </div>
  );
}
