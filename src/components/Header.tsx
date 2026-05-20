import {
  AppBar,
  Box,
  Button,
  Container,
  Fab,
  Fade,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import {
  LightModeRounded,
  MenuRounded,
  SouthEastRounded,
  KeyboardArrowUp,
  DarkModeRounded,
} from "@mui/icons-material";
import { useState } from "react";
import DrawerNavigate from "./DrawerNavigate";
import RotatingIcons from "./RotatingIcons";
import { useThemeMode } from "../context";

type Props = {
  window?: () => Window;
  children?: React.ReactElement;
};

const ScrollTop = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const win = window?.() ?? globalThis.window;
    win.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 26, zIndex: 9999 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
];

function Header() {
  const { mode, setMode } = useThemeMode();
  const theme = useTheme();
  const { accent } = theme.palette;
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = mode === "dark";

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ minHeight: 76, justifyContent: "space-between", gap: 2 }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Box
                aria-label="WB logo"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "16px",
                  display: "grid",
                  placeItems: "center",
                  background: `linear-gradient(135deg, ${accent.emerald}30, ${accent.amber}30)`,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <RotatingIcons />
              </Box>
              <Box
                component="a"
                href="#inicio"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 800, lineHeight: 1 }}
                >
                  Wilman Barrios
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Web Developer & Functional Analyst
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navItems.map((item) => (
                <Button key={item.href} color="inherit" href={item.href}>
                  {item.label}
                </Button>
              ))}
              <IconButton
                color="inherit"
                onClick={() => setMode(isDark ? "light" : "dark")}
                aria-label="Cambiar tema"
              >
                {isDark ? <LightModeRounded /> : <DarkModeRounded />}
              </IconButton>
              <Button
                variant="contained"
                href="#contacto"
                endIcon={<SouthEastRounded />}
              >
                Hablemos
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <IconButton
                color="inherit"
                onClick={() => setMode(isDark ? "light" : "dark")}
                aria-label="Cambiar tema"
              >
                {isDark ? <LightModeRounded /> : <DarkModeRounded />}
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menú"
              >
                <MenuRounded />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <DrawerNavigate
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        anchor="right"
      />
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Header;