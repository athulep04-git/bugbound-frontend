import React, { useState } from "react";
import { Modal } from "flowbite-react";

function RatingModal({ open, onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Modal show={open} onClose={onClose} size="md">
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Rate the Debugger
        </h2>

        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-3xl cursor-pointer ${
                (hover || rating) >= star
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200"
          >
            Cancel
          </button>

          <button
            disabled={rating === 0}
            onClick={() => onSubmit(rating)}
            className="px-4 py-2 rounded bg-purple-600 text-white disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default RatingModal;
