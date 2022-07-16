import React, { useState } from "react";
import InputForm from "./InputForm";
import LinkView from "./LinkView";

export default function Section() {
  const [data, setData] = useState([]);
  const onShortenLink = obj => {
    setData([...data, obj]);
    console.log(data);
  };
  return (
    <div className="bg-gray-200 lg:p-5 text-center flex items-center min-h-[80vh]">
      <div className="lg:container lg:mx-auto px-10 py-10">
        <h1 className="text-5xl mb-5">More than just shorter links</h1>
        <p className="text-xl">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <div className="flex flex-col items-center justify-items-center mt-2">
          <div className="lg:w-4/6 sm:w-full">
            <InputForm onShortenLink={onShortenLink} />
            {data?.map(d => d?.short_link && <LinkView data={d} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
