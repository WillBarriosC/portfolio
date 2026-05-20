import { useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeModeContext } from "./themeModeContext";
import type { ThemeMode } from "../../utils/types";

declare module "@mui/material/styles" {
  interface Palette {
    accent: {
      emerald: string;
      amber: string;
      green: string;
      gold: string;
    };
  }
  interface PaletteOptions {
    accent?: {
      emerald?: string;
      amber?: string;
      green?: string;
      gold?: string;
    };
  }
}

type Props = {
  children: React.ReactNode;
};

function ThemeModeProvider({ children }: Props) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<ThemeMode>(prefersDark ? "dark" : "light");

  const theme = useMemo(() => {
    const isDark = mode === "dark";

    const base = createTheme({
      palette: {
        mode,
        primary: { main: isDark ? "#34d399" : "#059669" },
        secondary: { main: isDark ? "#fbbf24" : "#d97706" },
        background: {
          default: isDark ? "#050d0a" : "#f0fdf4",
          paper: isDark ? "#0a1a12" : "#ffffff",
        },
        text: {
          primary: isDark ? "#ecfdf5" : "#022c22",
          secondary: isDark ? "#6b7280" : "#374151",
        },
        divider: isDark ? "rgba(52, 211, 153, 0.1)" : "rgba(5, 150, 105, 0.15)",
        accent: {
          emerald: isDark ? "#34d399" : "#059669",
          amber: isDark ? "#fbbf24" : "#b45309",
          green: isDark ? "#6ee7b7" : "#047857",
          gold: isDark ? "#fcd34d" : "#92400e",
        },
      },
      typography: {
        fontFamily: "'Inter', sans-serif",
        h1: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
        h2: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
        h3: { fontFamily: "'Outfit', sans-serif", fontWeight: 700 },
        h4: { fontFamily: "'Outfit', sans-serif", fontWeight: 700 },
        h5: { fontFamily: "'Outfit', sans-serif", fontWeight: 600 },
        h6: { fontFamily: "'Outfit', sans-serif", fontWeight: 600 },
        body1: { fontFamily: "'Inter', sans-serif" },
        body2: { fontFamily: "'Inter', sans-serif" },
        caption: { fontFamily: "'Inter', sans-serif" },
        overline: { fontFamily: "'Inter', sans-serif" },
        button: { fontFamily: "'Inter', sans-serif", fontWeight: 600 },
      },
      shape: { borderRadius: 20 },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            body,
            .MuiAppBar-root,
            .MuiDrawer,
            .MuiDrawer-paper,
            .MuiCard-root,
            .MuiPaper-root,
            .MuiChip-root,
            .MuiButton-root,
            .MuiIconButton-root,
            .MuiDivider-root,
            .MuiTypography-root,
            .MuiListItemButton-root {
              transition:
                background-color 0.40s ease,
                border-color 0.40s ease,
                color 0.40s ease;
            }
          `,
        },
      },
    });

    return responsiveFontSizes(base);
  }, [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default ThemeModeProvider;
