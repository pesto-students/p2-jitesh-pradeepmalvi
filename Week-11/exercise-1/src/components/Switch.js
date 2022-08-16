import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/actions";

function Switch() {
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <div class="flex justify-center p-10">
      <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onClick={() => dispatch(changeTheme(!theme))}
        />
        <label
          for="toggle"
          class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <label for="toggle" class="text-md text-gray-700">
        Dark Mode
      </label>
    </div>
  );
}

export default Switch;
