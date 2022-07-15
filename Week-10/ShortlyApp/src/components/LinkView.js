import React, { useEffect, useState } from "react";

export default function LinkView() {
  return (
    <div
      className={`block w-full mt-5 p-6 rounded-lg shadow-awsm bg-white py-4`}
    >
      <div className="flex items-center justify-between">
        <div className="link">https://shorten-link/lorem-ipsum</div>
        <div className="flex items-center justify-between">
          <div className="text-teal-500 mr-2 cursor-pointer">
            https://shorten-link
          </div>
          <button
            type="submit"
            className="px-5 py-3 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 transition duration-150 ease-in-out"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
