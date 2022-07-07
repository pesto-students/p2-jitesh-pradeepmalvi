import React from "react";

export default function Note({ title, description }) {
  return (
    <div className="block p-6 pb-4 rounded-lg shadow-awsm bg-white min-w-[30%] mx-2 mb-4">
      <h4 className="font-bold min-w-min">{title}</h4>
      <p>{description}</p>
      <div className="action pt-4">
        <span className="mr-3">
          <i class="fa-solid fa-pencil"></i>
        </span>
        <span className="mr-3">
          <i class="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
}
