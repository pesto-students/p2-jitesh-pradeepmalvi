import React from "react";
import Note from "./Note";

export default function NoteList() {
  return (
    <div className="flex flex-wrap">
      <Note
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, autem sapiente laborum"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, autem sapiente laborum repellat minus officiis repellendus accusamus labore illum officia mollitia? Tempora explicabo harum cupiditate consequatur libero sint, sequi voluptates aspernatur? Reiciendis, adipisci vel, eius corporis nobis temporibus qui dolorem nulla ipsa cupiditate fugiat possimus velit minima, quam perspiciatis!"
      />
      <Note title="hello" description="" />
      <Note title="hello" description="world" />
      <Note title="hello" description="world" />
      <Note title="hello" description="world" />
      <Note title="hello" description="world" />
      <Note title="hello" description="world" />{" "}
      <Note title="hello" description="world" />
    </div>
  );
}
