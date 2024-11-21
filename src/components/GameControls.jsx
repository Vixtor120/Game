import React from "react";

function GameControls({ reset }) {
  return (
    <button
      className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
      onClick={reset}
    >
      Jugar de nuevo
    </button>
  );
}

export default GameControls;