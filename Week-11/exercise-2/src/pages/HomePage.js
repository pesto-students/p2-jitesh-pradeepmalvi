import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStep, resetStep } from "../store/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const { steps } = useSelector(state => state.steps);
  return (
    <div className="flex p-20 flex-col items-center w-100 justify-center text-center">
      <div className="text-2xl mb-10 font-bold">
        You've walked {steps} steps today!
      </div>
      <button
        onClick={() => dispatch(addStep())}
        class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded block my-2"
      >
        Add a Step
      </button>
      <button
        onClick={() => dispatch(resetStep())}
        class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded block my-2"
      >
        Reset Steps
      </button>
    </div>
  );
}
