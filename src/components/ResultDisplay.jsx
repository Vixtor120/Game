import React from "react";
import options from "../data/options";

function ResultDisplay({ result, userChoice, computerChoice }) {
  return (
    <div className="mt-8">
      {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Empate</p>}
      {result === 1 && (
        <p className="text-xl mt-4">
          ✅ Has ganado con {options[userChoice]?.name} contra{" "}
          {options[computerChoice]?.name}
        </p>
      )}
      {result === 2 && (
        <p className="text-xl mt-4">
          ❌ Has perdido con {options[userChoice]?.name} contra{" "}
          {options[computerChoice]?.name}
        </p>
      )}
    </div>
  );
}

export default ResultDisplay;