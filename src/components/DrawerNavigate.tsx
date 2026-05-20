import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  Divider,
  IconButton,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import {
  CloseRounded,
  HomeRounded,
  PersonRounded,
  WorkRounded,
  LayersRounded,
  SouthEastRounded,
} from "@mui/icons-material";
import { useThemeMode } from "../context";

type SectionListProps = {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
};

const sections: SectionListProps[] = [
  {
    id: "inicio",
    label: "Inicio",
    description: "Presentación",
    icon: <HomeRounded fontSize="small" />,
  },
  {
    id: "perfil",
    label: "Perfil",
    description: "Quién soy y qué hago",
    icon: <PersonRounded fontSize="small" />,
  },
  {
    id: "proyectos",
    label: "Proyectos",
    description: "Casos y trabajo real",
    icon: <WorkRounded fontSize="small" />,
  },
  {
    id: "stack",
    label: "Stack",
    description: "Tecnología y metodología",
    icon: <LayersRounded fontSize="small" />,
  },
];

type Props = {
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right" | "top" | "bottom";
};

export default function DrawerNavigate({
  open,
  onClose,
  anchor = "right",
}: Props) {
  const { mode } = useThemeMode();
  const theme = useTheme();
  const { accent } = theme.palette;
  const isDark = mode === "dark";

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 300,
            background: isDark
              ? `linear-gradient(160deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`
              : `linear-gradient(160deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
            borderLeft: "1px solid",
            borderColor: "divider",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: `linear-gradient(90deg, ${accent.emerald}, ${accent.amber})`,
              zIndex: 1,
            },
          },
        },
      }}
    >
      <Box
        sx={{
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 800, lineHeight: 1, mb: 0.3 }}
            >
              Wilman Barrios
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Web Developer & Functional Analyst
            </Typography>
          </Box>
          <IconButton
            aria-label="Cerrar menú"
            onClick={onClose}
            size="small"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <CloseRounded fontSize="small" />
          </IconButton>
        </Stack>

        <Divider sx={{ mb: 2 }} />

        <List disablePadding sx={{ flexGrow: 1 }}>
          {sections.map((section) => (
            <ListItem key={section.id} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component="a"
                href={`#${section.id}`}
                onClick={onClose}
                sx={{
                  borderRadius: 2.5,
                  px: 1.5,
                  py: 1.2,
                  gap: 1.5,
                  alignItems: "center",
                  "&:hover": {
                    bgcolor: `${accent.emerald}14`,
                    "& .nav-icon": { color: "primary.main" },
                    "& .nav-label": { color: "text.primary" },
                  },
                }}
              >
                <Box
                  className="nav-icon"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: isDark
                      ? "#ffffff0a"
                      : "#0000000a",
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    flexShrink: 0,
                    transition: "color 0.15s ease",
                  }}
                >
                  {section.icon}
                </Box>

                <Box>
                  <Typography
                    className="nav-label"
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: "text.secondary",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {section.label}
                  </Typography>
                  <Typography variant="caption" color="text.disabled">
                    {section.description}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box>
          <Divider sx={{ mb: 2 }} />
          <Button
            href="#contacto"
            variant="contained"
            fullWidth
            size="large"
            endIcon={<SouthEastRounded />}
            onClick={onClose}
            sx={{ py: 1.3 }}
          >
            Hablemos
          </Button>
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", mt: 2, alignItems: "center" }}
          >
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
        </Box>
      </Box>
    </Drawer>
  );
}
