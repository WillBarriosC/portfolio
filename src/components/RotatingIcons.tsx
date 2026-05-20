import { Box, Fade } from "@mui/material";
import { useState, useEffect } from "react";
import type { SvgIconComponent } from "@mui/icons-material";

import {
  CodeRounded,
  TerminalRounded,
  WebRounded,
  DataObjectRounded,
  StorageRounded,
  JavascriptRounded,
  ManageAccountsRounded,
  AccountTreeRounded,
} from "@mui/icons-material";

const icons: SvgIconComponent[] = [
  CodeRounded,
  TerminalRounded,
  WebRounded,
  DataObjectRounded,
  StorageRounded,
  JavascriptRounded,
  ManageAccountsRounded,
  AccountTreeRounded,
];

const INTERVAL_MS : number = 3000;
const FADE_MS : number = 700;

const RotatingIcon = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % icons.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const Icon = icons[index];

  return (
    <Fade in={visible} timeout={FADE_MS}>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Icon fontSize="small" />
      </Box>
    </Fade>
  );
};

export default RotatingIcon;
