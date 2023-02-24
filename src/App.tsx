import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import LeaderboardPage from "./components/LeaderboardPage";
import ErrorPage from "./components/ErrorPage";
import "./styles/global.css";

function App() {
  const [visible, setVisible] = useState(false);

  const [charactersFound, setCharactersFound] = useState([]);
  const [timer, setTimer] = useState();
  const [score, setScore] = useState();

  const gamePageOnClick = () => {};

  const getClickPostition = () => {};

  const characterChoice = () => {};

  //call setCharactersFound here
  const characterChoiceWasCorrect = () => {};

  const characterChoiceWasIncorrect = () => {};

  const gameEnd = () => {};

  const scorePass = () => {};

  const isScoreHighScore = () => {};

  const gameReset = () => {};

  /**const getClickPosition2 = (e) => {
    setVisible(!visible);

    if (visible) {
      document.getElementById("characterSelectBox").style.visibility = "hidden";
    } else {
      document.getElementById("characterSelectBox")?.style.visibility =
        "visible";
    }

    let parentPosition = getPosition(e.currentTarget);
    let xPosition =
      e.clientX -
      parentPosition.x -
      document.getElementById("characterSelectBox").clientWidth / 2;
    let yPosition =
      e.clientY -
      parentPosition.y -
      document.getElementById("characterSelectBox").clientHeight / 2;

    document.getElementById("characterSelectBox").style.left = xPosition + "px";
    document.getElementById("characterSelectBox").style.top = yPosition + "px";

    let rect = document
      .getElementById("characterSelectBox")
      .getBoundingClientRect();
    console.log(rect.top, rect.left, rect.right, rect.bottom);
  };

  const getPosition = (el) => {
    let xPos = 0;
    let yPos = 0;

    while (el) {
      if (el.tagName === "BODY") {
        let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        let yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos,
    };
  };
*/

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
