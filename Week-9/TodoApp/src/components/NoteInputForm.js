import React, { useEffect, useState } from "react";

export default function NoteInputForm({
  onNoteAdd,
  onNoteUpdate,
  note,
  isOnEditState
}) {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (note) {
      setValues(note);
    }
  }, note);

  const onInputChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (isOnEditState) {
      onNoteUpdate(note.id, values);
    } else {
      onNoteAdd(values);
    }

    setValues({ title: "", description: "" });
  };
  return (
    <div
      className={`block ${
        isOnEditState && "w-full mx-2"
      } p-6 rounded-lg shadow-awsm bg-white mb-4`}
    >
      <form onSubmit={onSubmit}>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:outline-none"
            id="title"
            placeholder="Title"
            value={values.title}
            name="title"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="form-control resize-y w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:outline-none"
            placeholder="Take a Note"
            id="description"
            value={values.description}
            name="description"
            onChange={onInputChange}
            required
            rows={isOnEditState ? 5 : 10}
          />
        </div>

        <button
          type="submit"
          className="p-3 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 transition duration-150 ease-in-out"
        >
          {isOnEditState ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
}
