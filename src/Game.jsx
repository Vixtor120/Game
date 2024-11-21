import { useState, useEffect } from "react";
import useChoices from "./hooks/useChoices";
import OptionButton from "./components/OptionsButton.jsx";
import ResultDisplay from "./components/ResultDisplay.jsx";
import MessageDisplay from "./components/MessageDisplay.jsx";
import GameControls from "./components/GameControls.jsx";
import options from "./data/options.jsx";

export default function Game() {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();

  // Clase de estilo común para botones
  const buttonStyle =
    "text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-700">
      <div className="w-full max-w-50 p-8 rounded-xl shadow-xl bg-gray-700 border border-gray-500">
        <img src="../src/images/pepopayaso.gif" alt="Game Image" className="mb-4 rounded-lg shadow-lg max-w-40 mx-auto" />
        <h1 className="text-4xl mb-6 text-center font-bold text-white tracking-wide">
          ¡A jugar illo!
        </h1>
        <div className="flex flex-col items-center gap-4">
          {/* Opciones de juego */}
          <div className="flex justify-center gap-10">
            {options.map((option) => (
              <OptionButton
                key={option.id}
                option={option}
                handlePlay={handlePlay}
                disabled={disabled}
                className={`bg-indigo-600 hover:bg-indigo-800 ${buttonStyle}`}
              />
            ))}
          </div>

          {/* Mensajes y resultados */}
          {userChoice !== null && (
            <>
              <MessageDisplay message={userMessage} className="text-yellow-300" />
              <MessageDisplay message={computerMessage} className="text-pink-300" />
              <ResultDisplay
                result={result}
                userChoice={userChoice}
                computerChoice={computerChoice}
                className="text-lg font-bold text-green-400 mt-4"
              />
            </>
          )}

          {/* Controles del juego */}
          <GameControls
            reset={reset}
            className={`mt-6 bg-red-500 hover:bg-red-700 ${buttonStyle}`}
          />
        </div>
      </div>
    </div>
  );
}
