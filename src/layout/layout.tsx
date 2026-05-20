import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function Layout() {
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default Layout;
