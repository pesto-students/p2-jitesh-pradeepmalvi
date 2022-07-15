import React from "react";
import InputForm from "./InputForm";
import LinkView from "./LinkView";

export default function Section() {
  return (
    <div className="bg-gray-200 p-5 flex items-center">
      <div className="lg:container lg:mx-auto px-10 py-10">
        <h1 className="text-5xl mb-5">More than just shorter links</h1>
        <p className="text-xl">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <div className="flex flex-col items-center justify-items-center mt-2">
          <div className="w-4/6">
            <InputForm />
            <LinkView />
          </div>
        </div>
      </div>
    </div>
  );
}
