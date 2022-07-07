import React from "react";
import Navbar from "../components/Navbar";
import NoteInputForm from "../components/NoteInputForm";
import NoteList from "../components/NoteList";

export default function homePage() {
  return (
    <>
      <Navbar />
      <div className="my-10 mx-5 flex">
        <div className="mx-5 min-w-[30%]">
          <NoteInputForm />
        </div>
        <div className="mx-5 min-w-[40%]">
          <NoteList />
        </div>
      </div>
    </>
  );
}
