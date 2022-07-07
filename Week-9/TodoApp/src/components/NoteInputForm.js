import React from "react";

export default function NoteInputForm() {
  return (
    <div>
      <div className="block p-6 rounded-lg shadow-awsm bg-white min-w-[30%]">
        <form>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputDetail"
              placeholder="Title"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputDetail"
              placeholder="Take a Note"
            />
          </div>

          <button
            type="submit"
            className="p-3 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 transition duration-150 ease-in-out"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
