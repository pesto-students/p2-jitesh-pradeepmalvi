import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

export default function InputForm({ onShortenLink }) {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onInputChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });

    error && setError(false);
  };
  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    onShortenLink({});
    getLink(values.link);
  };

  const getLink = link => {
    try {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(res => {
          setLoading(false);
          onShortenLink(res.data.result);
          setValues({ link: "" });
        })
        .catch(err => {
          console.log(err.response.data.error);
          setLoading(false);
          setError(err.response.data.error);
        });
    } catch (error) {
      setLoading(false);
    }
  };
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
          {loading ? (
            <button className="px-5 py-3 w-40 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 transition duration-150 ease-in-out">
              <Loader width={"w-4"} />
            </button>
          ) : (
            <button
              type="submit"
              className="px-5 py-3 w-40 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              {loading ? <Loader width={"w-4"} /> : "Shorten It!"}
            </button>
          )}
        </div>
        {error && (
          <div
            class="p-3 text-sm bg-red-200 text-red-700 rounded mt-3 transition duration-150 ease-in-out"
            role="alert"
          >
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
