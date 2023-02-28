import React, { useState } from "react";
//import CharacterSelectBox from "./CharacterSelectBox";
//import charactersArray from "./charactersArray";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface GamePageProps {
  gameEnd: () => void;
  gamePageOnClick: () => void;
}

const GamePage = ({ gameEnd, gamePageOnClick }: GamePageProps) => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    gamePageOnClick();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: e.clientX + 2,
            mouseY: e.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div onClick={handleContextMenu} style={{ cursor: "context-menu" }}>
      <Box
        sx={{
          width: 1920,
          height: 8086,
        }}
      >
        <img src={require("../imgs/city.jpg")} alt="City Level" />
      </Box>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Steven Universe</MenuItem>
        <MenuItem onClick={handleClose}>Edward Elric</MenuItem>
        <MenuItem onClick={handleClose}>Predator</MenuItem>
        <MenuItem onClick={handleClose}>John McClane</MenuItem>
      </Menu>
    </div>
  );
};

export default GamePage;
