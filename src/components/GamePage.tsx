import React from "react";
//import CharacterSelectBox from "./CharacterSelectBox";
//import charactersArray from "./charactersArray";

interface GamePageProps {
  getClickPosition: () => void;
  addCharacter: () => void;
}

const GamePage = ({ getClickPosition, addCharacter }: GamePageProps) => {
  return (
    <div>
      <div className="cityLevel" id="cityLevel" onClick={getClickPosition}>
        <div
          id="characterSelectBox"
          className="flex flex-col w-36 text-black text-center mt-2.5 mx-1.5 p-1.5"
        >
          <div
            id="targetBoxDiv"
            className="bg-transparent border-solid border-4 border-black rounded-md mt-2.5 mx-1.5 p-1.5 w-28 h-24"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
