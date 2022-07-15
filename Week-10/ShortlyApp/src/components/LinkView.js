import React, { useEffect, useState } from "react";

export default function LinkView({ data }) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = link => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  return (
    <div
      className={`block w-full mt-5 p-6 rounded-lg shadow-awsm bg-white py-4`}
    >
      <div className="flex items-center justify-between">
        <div className="link">{data.original_link}</div>
        <div className="flex items-center justify-between">
          <div className="text-teal-500 mr-2 cursor-pointer">
            {data.short_link}
          </div>
          {isCopied ? (
            <button
              type="submit"
              className="px-5 py-3 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out"
              onClick={() => onCopy(data.short_link)}
            >
              Copied
            </button>
          ) : (
            <button
              type="submit"
              className="px-5 py-3 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 transition duration-150 ease-in-out"
              onClick={() => onCopy(data.short_link)}
            >
              Copy
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
