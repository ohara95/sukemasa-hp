import React from "react";

export const Alert = ({ title, text, icon }) => {
  return (
    <>
      <div className="shadow" role="alert">
        <div className="flex">
          <div className="bg-blue-500 w-16 text-center p-2">
            <div className="flex justify-center h-full items-center">
              <i className="text-white">{icon}</i>
            </div>
          </div>
          <div className="bg-white border-r-4 border-blue-400 w-full p-4">
            <div>
              <p className="text-gray-600 font-bold">{title}</p>
              <p className="text-gray-600 text-sm">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
