"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center flex-col min-h-[30vh] gap-5">
      <h2 className="text-3xl">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="px-5 py-2 bg-blue-600 rounded-md  text-white"
      >
        Try again
      </button>
    </div>
  );
}
