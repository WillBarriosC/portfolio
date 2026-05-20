import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useThemeMode } from "../context";

function Footer() {
  const { mode } = useThemeMode();
  const theme = useTheme();
  const { accent } = theme.palette;

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        background:
          mode === "dark"
            ? "linear-gradient(180deg, #090f1b00 0%, #090f1b99 100%)"
            : "linear-gradient(180deg, #ffffff00 0%, #eef4fc99 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{
            py: 3.5,
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © 2026 Wilman Barrios
          </Typography>

          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                bgcolor: accent.emerald,
              }}
            />
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                bgcolor: accent.amber,
              }}
            />
          </Stack>

          <Typography variant="caption" color="text.secondary">
            All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
