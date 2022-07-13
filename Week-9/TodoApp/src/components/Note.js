import React from "react";

export default function Note({
  id,
  title,
  description,
  approved,
  onEdit,
  onDelete,
  onApprove
}) {
  return (
    <div
      className={`block w-full p-6 pb-4 rounded-lg shadow-awsm bg-white min-w-[30%] mx-2 mb-4 ${
        approved && "bg-lime-500"
      }`}
    >
      <h3 className="font-bold mb-2 uppercase">{title}</h3>
      <p>{description}</p>
      <div className="flex justify-between">
        <div className="action pt-4">
          <span className="mr-5">
            <i
              class="fa-solid fa-pencil cursor-pointer"
              onClick={() => onEdit(id)}
            ></i>
          </span>
          <span className="mr-5">
            <i
              class="fa-solid fa-trash  cursor-pointer"
              onClick={() => onDelete(id)}
            ></i>
          </span>
        </div>
        <div className="approved pt-3">
          {approved ? (
            <span className="text-2xl cursor-pointer">
              <i
                class="fa-solid fa-circle-xmark"
                onClick={() => onApprove(id)}
              ></i>
            </span>
          ) : (
            <span className="text-2xl text-lime-500 cursor-pointer">
              <i
                class="fa-solid fa-circle-check"
                onClick={() => onApprove(id)}
              ></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
