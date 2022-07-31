import React from "react";
import { useSelector } from "react-redux";
import Switch from "../components/Switch";

export default function HomePage() {
  const { theme } = useSelector(state => state.theme);
  return (
    <>
      <Switch />
      <div
        className={`flex align-center justify-center w-100 h-100 p-20 m-5 ${
          theme ? "bg-black" : "bg-white"
        }`}
      >
        {theme ? (
          <p className="text-5xl font-bold text-white text-uppercase">Dark</p>
        ) : (
          <p className="text-5xl font-bold">Light</p>
        )}
      </div>
    </>
  );
}
