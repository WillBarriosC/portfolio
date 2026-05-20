import ThemeModeProvider from "../context/theme/themeModeProvider";

type Props = {
  children: React.ReactNode;
};
function ThemeConfig({ children }: Props) {
  return <ThemeModeProvider>{children}</ThemeModeProvider>;
}

export default ThemeConfig;
