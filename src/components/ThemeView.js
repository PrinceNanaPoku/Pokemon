import { useState } from "react";

function ThemeView({ onClose, setPrimaryColor }) {
  const [selectedColor, setSelectedColor] = useState("#FF0000");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleApplyTheme = () => {
    setPrimaryColor(selectedColor);
    onClose();
  };

  return (
    <div onClose={onClose}>
      <div className="bg-gray-700 bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xs font-semibold mb-5 text-center">Show Theme</h2>

          <button
            onClick={handleApplyTheme}
            className="bg-pink-500 text-white px-4 py-4 rounded-full mr-2"
          ></button>

          <button
            onClick={handleApplyTheme}
            className="bg-blue-500 text-white px-4 py-4 rounded-full mr-2"
          ></button>

          <button
            onClick={handleApplyTheme}
            className="bg-yellow-500 text-white px-4 py-4 rounded-full"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ThemeView;
