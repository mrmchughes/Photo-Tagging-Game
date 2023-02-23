import React, { useState } from "react";
//import CharacterSelectBox from "./CharacterSelectBox";
//import charactersArray from "./charactersArray";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface GamePageProps {
  //getClickPosition: () => void;
  //addCharacter: () => void;
}

const GamePage = () => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      <Typography>Test</Typography>
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
        <MenuItem onClick={handleClose}>Character 1</MenuItem>
        <MenuItem onClick={handleClose}>Character 2</MenuItem>
        <MenuItem onClick={handleClose}>Character 3</MenuItem>
        <MenuItem onClick={handleClose}>Character 4</MenuItem>
      </Menu>
    </div>
  );
};

export default GamePage;
