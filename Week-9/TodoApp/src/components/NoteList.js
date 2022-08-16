import React from "react";
import Note from "./Note";
import NoteInputForm from "./NoteInputForm";

export default function NoteList({ noteList, onSetNoteList }) {
  const onEdit = id => {
    onSetNoteList(
      noteList.map(n =>
        n.id === id
          ? {
              ...n,
              isOnEditState: !n.isOnEditState
            }
          : {
              ...n,
              isOnEditState: n.isOnEditState
            }
      )
    );
  };
  const onDelete = id => {
    onSetNoteList(noteList.filter(n => n.id !== id));
  };
  const onApprove = id => {
    onSetNoteList(
      noteList.map(n =>
        n.id === id
          ? {
              ...n,
              isApproved: !n.isApproved
            }
          : n
      )
    );
  };
  const onNoteUpdate = (id, values) => {
    onSetNoteList(
      noteList.map(n =>
        n.id === id
          ? {
              ...values,
              isOnEditState: false
            }
          : n
      )
    );
  };
  return (
    <div className="flex flex-wrap w-full">
      {noteList.map(note =>
        note.isOnEditState ? (
          <NoteInputForm
            onNoteUpdate={onNoteUpdate}
            isOnEditState
            note={note}
          />
        ) : (
          <Note
            id={note.id}
            title={note.title}
            description={note.description}
            approved={note.isApproved}
            onEdit={onEdit}
            onDelete={onDelete}
            onApprove={onApprove}
          />
        )
      )}
    </div>
  );
}
