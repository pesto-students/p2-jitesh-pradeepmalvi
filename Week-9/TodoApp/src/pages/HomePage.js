import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteInputForm from "../components/NoteInputForm";
import NoteList from "../components/NoteList";

export default function HomePage() {
  const [noteList, setNoteList] = useState([]);

  const onNoteAdd = values => {
    const notes = noteList;
    notes.push({
      id: noteList.length + 1,
      isApproved: false,
      isOnEditState: false,
      ...values
    });
    setNoteList([...notes]);
  };
  const onSetNoteList = noteList => {
    setNoteList([...noteList]);
  };
  return (
    <>
      <Navbar />
      <div className="pt-10 mx-5 flex flex-col lg:flex-row">
        <div className="mx-5 my-10 min-w-[30%]">
          <NoteInputForm onNoteAdd={onNoteAdd} />
        </div>
        <div className="mx-5 my-9 py-1 min-w-[65%] max-h-[80vh] overflow-y-scroll no-scrollbar">
          <NoteList noteList={noteList} onSetNoteList={onSetNoteList} />
        </div>
      </div>
    </>
  );
}
