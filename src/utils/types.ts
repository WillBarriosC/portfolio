export type ThemeMode = "light" | "dark";

export type ThemeModeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};
