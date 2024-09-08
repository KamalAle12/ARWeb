import React from "react";

const Modal = ({ isOpen, onClose, image, text, displayedText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        {image && (
          <img
            src={image}
            alt="Story Image"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
        )}
        <div className="text-lg text-gray-700">
          {/* Display the typing effect text here */}
          {displayedText}
        </div>
      </div>
    </div>
  );
};

export default Modal;
