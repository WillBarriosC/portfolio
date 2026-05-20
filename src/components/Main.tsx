import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  LaunchRounded,
  LinkedIn,
  WhatsApp,
  WorkspacesRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import { useThemeMode } from "../context";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

function Main() {
  const { mode } = useThemeMode();
  const theme = useTheme();
  const { accent } = theme.palette;

  const profiles = [
    {
      number: "01",
      title: "Desarrollo Frontend Moderno",
      text: "Construyo interfaces con React y TypeScript pensando en quien las va a mantener. Performance y claridad de código no son negociables.",
      accent: accent.emerald,
    },
    {
      number: "02",
      title: "Análisis Funcional & Producto",
      text: "Hago de puente entre lo que el cliente necesita y lo que el equipo puede construir. Menos malentendidos, entregas más predecibles.",
      accent: accent.amber,
    },
    {
      number: "03",
      title: "Gestión de Proyectos Tecnológicos",
      text: "Seguimiento de KPIs, coordinación entre stakeholders y comunicación clara en todas las direcciones. El delivery no se improvisa.",
      accent: accent.green,
    },
    {
      number: "04",
      title: "Integración Backend & Datos",
      text: "APIs REST, Node.js, bases de datos relacionales y no relacionales. Lo que el proyecto necesite, sin complicaciones innecesarias.",
      accent: accent.gold,
    },
  ];
  const projects = [
    {
      number: "01",
      title: "Mujer Oblicua — Blog Interactivo",
      type: "Development & Design",
      description:
        "Fui responsable de todo: wireframe, código, animaciones y el primer deploy en producción. Arquitectura en React con gestión de contenidos, interfaz cuidada y SEO desde el inicio. Un proyecto donde diseño y desarrollo operaron como un sistema unificado, sin barreras.",
      highlights: [
        "React",
        "JavaScript",
        "Framer Motion",
        "UI/UX Design",
        "Animaciones",
        "SEO Optimization",
      ],
      accent: accent.emerald,
      scope: 85,
      url: "https://mujeroblicua.org",
    },
    {
      number: "02",
      title: "Plataforma de Gestión Operativa (INDRA)",
      type: "Functional Analyst & Project Leadership",
      description:
        "En INDRA gestioné la operación de proyectos tecnológicos: seguimiento de KPIs, análisis funcional y coordinación entre cliente y equipo técnico. Mantener a los stakeholders alineados sin perder el foco en el delivery.",
      highlights: [
        "Project Management",
        "KPI Reporting",
        "Low Code",
        "Análisis Funcional",
        "PostgreSQL",
        "MongoDB",
      ],
      accent: accent.amber,
      scope: 88,
      url: "",
    },
    {
      number: "03",
      title: "Aplicaciones Web Empresariales (Servidiesel)",
      type: "Frontend Dev & Backend Integration",
      description:
        "Desarrollo de aplicaciones internas con React y TypeScript para optimizar procesos operativos. Integré APIs REST y microservicios con Node.js, y trabajé con bases de datos relacionales y no relacionales según lo que cada caso pedía.",
      highlights: [
        "React",
        "TypeScript",
        "Node.js",
        "APIs/REST",
        "PostgreSQL",
        "MongoDB",
      ],
      accent: accent.green,
      scope: 78,
      url: "",
    },
  ];

  const stack = [
    {
      category: "Frontend",
      accent: accent.emerald,
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Material UI",
        "Framer Motion",
        "Vite",
      ],
    },
    {
      category: "Backend & Datos",
      accent: accent.green,
      skills: [
        "Node.js",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Microservicios",
        "Low Code",
      ],
    },
    {
      category: "Análisis & Gestión",
      accent: accent.amber,
      skills: [
        "Análisis Funcional",
        "Levantamiento de Requerimientos",
        "Seguimiento de KPI",
        "Project Management",
        "Delivery Management",
      ],
    },
    {
      category: "Diseño & Herramientas",
      accent: accent.gold,
      skills: ["UI/UX Thinking", "Design Systems", "Git", "Jira", "Figma"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Box component="main">
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 6, md: 2 }, pb: { xs: 10, md: 2 } }}
        id="inicio"
      >
        <Grid
          container
          spacing={{ xs: 5, md: 6 }}
          sx={{ alignItems: "center" }}
        >
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ position: "relative", zIndex: 2 }}
          >
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.3 }}>
                <Chip
                  label="Abierto a proyectos · Respuesta en 24h"
                  color="primary"
                  sx={{ mb: 3 }}
                />
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.3 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3.2rem", sm: "4.4rem", md: "5.6rem" },
                    lineHeight: 0.95,
                    mb: 3,
                  }}
                >
                  Construyo lo que ves, coordino al equipo. Entrego lo que se
                  prometió.
                </Typography>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.3 }}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    maxWidth: 680,
                    mb: 4,
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  Llevo varios años en la intersección entre desarrollo,
                  análisis y gestión de proyectos. Conecto código y estrategia,
                  evitando malentendidos que cuestan tiempo y dinero.
                </Typography>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.3 }}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    size="large"
                    variant="contained"
                    href="#proyectos"
                    endIcon={<LaunchRounded />}
                  >
                    Ver proyectos
                  </Button>
                  <Button size="large" variant="outlined" href="#contacto">
                    Agendar conversación
                  </Button>
                </Stack>
              </motion.div>
            </MotionBox>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ position: "relative", zIndex: 1 }}
          >
            <MotionCard
              initial={{ opacity: 0, scale: 0.9, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
              sx={{
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                overflow: "hidden",
                position: "relative",
                boxShadow:
                  mode === "dark"
                    ? "0 32px 80px #00000073, 0 0 0 1px #ffffff0a"
                    : "0 32px 80px #0f172a1f, 0 0 0 1px #00000008",
                background:
                  mode === "dark"
                    ? "linear-gradient(160deg, #0a1a12 0%, #050d0a 100%)"
                    : "linear-gradient(160deg, #ffffff 0%, #dcfce7 100%)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${accent.emerald}, ${accent.amber})`,
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Stack
                  direction="row"
                  sx={{
                    mb: 3,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ alignItems: "center" }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: "transparent",
                        border: "2px solid",
                        borderColor: "primary.main",
                        color: "primary.main",
                        fontWeight: 900,
                        fontSize: "0.95rem",
                      }}
                    >
                      WB
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                        Wilman Barrios
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Web Developer & Functional Analyst
                      </Typography>
                    </Box>
                  </Stack>
                  <WorkspacesRounded color="primary" />
                </Stack>

                <Box sx={{ height: "1px", bgcolor: "divider", mb: 2.5 }} />

                <Stack spacing={1.2} sx={{ mb: 3 }}>
                  {[
                    {
                      icon: "⬡",
                      text: "Arquitectura frontend con React & TypeScript",
                    },
                    {
                      icon: "◈",
                      text: "Análisis funcional orientado a negocio",
                    },
                    {
                      icon: "◎",
                      text: "Gestión de proyectos y KPI tracking",
                    },
                    {
                      icon: "▣",
                      text: "Integración backend y gestión de datos",
                    },
                  ].map((item) => (
                    <Stack
                      key={item.text}
                      direction="row"
                      spacing={1.5}
                      sx={{
                        p: 1.5,
                        borderRadius: 2.5,
                        alignItems: "center",
                        bgcolor: mode === "dark" ? "#ffffff08" : "#0f172a08",
                        border: "1px solid",
                        borderColor:
                          mode === "dark" ? "#ffffff0f" : "#0f172a0f",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          bgcolor: mode === "dark" ? "#34d39914" : "#34d3990d",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          color: "primary.main",
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2.5,
                    bgcolor: mode === "dark" ? "#fbbf2414" : "#fbbf240d",
                    border: "1px solid",
                    borderColor: mode === "dark" ? "#fbbf2433" : "#fbbf241f",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-around" }}
                  >
                    {[
                      { value: "5+", label: "años" },
                      { value: "3+", label: "proyectos" },
                      { value: "Dev · FA", label: "perfiles" },
                    ].map((m) => (
                      <Box key={m.label} sx={{ textAlign: "center" }}>
                        <Typography
                          sx={{
                            fontWeight: 900,
                            fontSize: "1.1rem",
                            color: "primary.main",
                            lineHeight: 1,
                          }}
                        >
                          {m.value}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {m.label}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </CardContent>
            </MotionCard>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" id="perfil" sx={{ py: { xs: 8, xl: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="overline" color="primary.main">
              Perfil
            </Typography>
            <Typography
              variant="h2"
              sx={{ mt: 1, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" } }}
            >
              Un perfil que cubre todo el camino: desde la arquitectura hasta la
              entrega.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
              He trabajado en proyectos donde el dev no entiende al cliente y el
              cliente no entiende al dev. Eso me enseñó a hacer de puente:
              entender el código lo suficiente para estimarlo bien, y entender
              el negocio lo suficiente para saber cuándo algo no vale la pena.
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Análisis Funcional",
                "Project Management",
                "UI/UX",
                "Agile",
                "KPI Tracking",
              ].map((s) => (
                <Chip
                  key={s}
                  label={s}
                  size="small"
                  variant="outlined"
                  color="primary"
                />
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {profiles.map((item, index) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                  <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    sx={{
                      height: "100%",
                      border: "1px solid",
                      borderColor: "divider",
                      borderLeft: "3px solid",
                      borderLeftColor: item.accent,
                      position: "relative",
                      overflow: "hidden",
                      transition: "box-shadow 0.2s ease, transform 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow:
                          mode === "dark"
                            ? `0 12px 40px #0000004d`
                            : `0 12px 40px #0f172a1a`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        sx={{
                          fontSize: "2.5rem",
                          fontWeight: 900,
                          lineHeight: 1,
                          color: item.accent,
                          opacity: 0.12,
                          position: "absolute",
                          top: 12,
                          right: 16,
                          userSelect: "none",
                        }}
                      >
                        {item.number}
                      </Typography>

                      <Typography
                        variant="overline"
                        sx={{
                          color: item.accent,
                          fontWeight: 700,
                          fontSize: "0.65rem",
                        }}
                      >
                        {item.number}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{ mt: 0.5, mb: 1.5, fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" id="proyectos" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            mb: 6,
          }}
        >
          <Box>
            <Typography variant="overline" color="primary.main">
              Proyectos
            </Typography>
            <Typography
              variant="h2"
              sx={{ mt: 1, fontSize: { xs: "2.2rem", md: "3rem" } }}
            >
              Tres proyectos distintos. El mismo enfoque en cada uno.
            </Typography>
          </Box>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 400, lineHeight: 1.7 }}
          >
            En cada uno hubo decisiones técnicas, análisis y coordinación. No
            solo código.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid key={project.title} size={{ xs: 12, md: 4 }}>
              <MotionCard
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: project.accent,
                  },
                }}
              >
                <CardActionArea
                  {...(project.url
                    ? {
                        href: project.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                      }
                    : {})}
                  sx={{
                    height: "100%",
                    cursor: project.url ? "pointer" : "default",
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3.5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 20,
                        fontSize: "4rem",
                        fontWeight: 900,
                        lineHeight: 1,
                        color: project.accent,
                        opacity: 0.07,
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {project.number}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.4,
                          borderRadius: 1.5,
                          border: "1px solid",
                          borderColor: project.accent,
                          bgcolor: `${project.accent}14`,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: project.accent,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                          }}
                        >
                          {project.type}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, lineHeight: 1.3 }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ flexGrow: 1, lineHeight: 1.7 }}
                    >
                      {project.description}
                    </Typography>

                    <Box>
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "space-between", mb: 0.5 }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          Alcance técnico
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: project.accent, fontWeight: 700 }}
                        >
                          {project.scope}%
                        </Typography>
                      </Stack>
                      <Box
                        sx={{
                          height: 4,
                          borderRadius: 99,
                          bgcolor: mode === "dark" ? "#ffffff0f" : "#0f172a12",
                          overflow: "hidden",
                        }}
                      >
                        <MotionBox
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.scope}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: index * 0.15,
                          }}
                          sx={{
                            height: "100%",
                            borderRadius: 99,
                            bgcolor: project.accent,
                          }}
                        />
                      </Box>
                    </Box>

                    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.8 }}>
                      {project.highlights.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor:
                              mode === "dark" ? "#ffffff0d" : "#0f172a0d",
                            border: "1px solid",
                            borderColor: "divider",
                            fontSize: "0.7rem",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" id="stack" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="overline" color="primary.main">
              Stack y metodología
            </Typography>
            <Typography
              variant="h2"
              sx={{ mt: 1, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" } }}
            >
              Las herramientas que uso. Por qué las elegí.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
              Uso React y TypeScript porque me permiten escalar sin desordenar
              el código. Node.js cuando el proyecto lo necesita. Y para la
              gestión, prefiero herramientas simples que el equipo realmente
              use.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
                overflow: "hidden",
              }}
            >
              <Stack
                direction="row"
                spacing={0.8}
                sx={{
                  px: 2,
                  py: 1.2,
                  bgcolor: mode === "dark" ? "#ffffff0a" : "#0f172a0a",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  alignItems: "center",
                }}
              >
                {["#FF605C", "#FFBD44", "#00CA4E"].map((color) => (
                  <Box
                    key={color}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: color,
                      opacity: 0.8,
                      ":hover": { opacity: 1.85 },
                    }}
                  />
                ))}
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ ml: 1, fontFamily: "monospace" }}
                >
                  skills.sh
                </Typography>
              </Stack>

              <Box sx={{ p: 2.5, fontFamily: "monospace" }}>
                {[
                  {
                    prompt: "→",
                    key: "metodología",
                    value: "Agile / Iterativo",
                  },
                  {
                    prompt: "→",
                    key: "enfoque",
                    value: "Análisis + Desarrollo + Liderazgo",
                  },
                  {
                    prompt: "→",
                    key: "comunicación",
                    value: "Técnica, funcional y stakeholders",
                  },
                  {
                    prompt: "→",
                    key: "entrega",
                    value: "Incremental con KPI tracking",
                  },
                  {
                    prompt: "→",
                    key: "herramientas",
                    value: "Git, Jira, Figma",
                  },
                ].map((line, i) => (
                  <MotionBox
                    key={line.key}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    sx={{ display: "flex", gap: 1, mb: 1 }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: accent.emerald,
                        fontFamily: "monospace",
                        fontWeight: 700,
                      }}
                    >
                      {line.prompt}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "primary.main", fontFamily: "monospace" }}
                    >
                      {line.key}:
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontFamily: "monospace" }}
                    >
                      {line.value}
                    </Typography>
                  </MotionBox>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 100 }}>
            <Card sx={{ border: "1px solid", borderColor: "divider" }}>
              <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={3}>
                  {stack.map((group, groupIndex) => (
                    <Box key={group.category}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center", mb: 1.5 }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            bgcolor: group.accent,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            color: group.accent,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            fontSize: "0.65rem",
                          }}
                        >
                          {group.category}
                        </Typography>
                        <Box
                          sx={{
                            flexGrow: 1,
                            height: "1px",
                            bgcolor: "divider",
                          }}
                        />
                      </Stack>

                      <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                        {group.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.88 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: groupIndex * 0.08 + skillIndex * 0.04,
                            }}
                          >
                            <Chip
                              label={skill}
                              size="small"
                              sx={{
                                border: "1px solid",
                                borderColor: `${group.accent}40`,
                                bgcolor: `${group.accent}10`,
                                color: "text.primary",
                                fontWeight: 500,
                                "&:hover": {
                                  bgcolor: `${group.accent}20`,
                                },
                              }}
                            />
                          </motion.div>
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" id="contacto" sx={{ py: { xs: 8, md: 12 } }}>
        <Card
          sx={{
            border: "1px solid",
            borderColor: "divider",
            overflow: "hidden",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: `linear-gradient(90deg, ${accent.emerald}, ${accent.amber})`,
            },
            background:
              mode === "dark"
                ? "linear-gradient(135deg, #0a1a12 0%, #050d0a 100%)"
                : "linear-gradient(135deg, #ffffff 0%, #dcfce7 100%)",
          }}
        >
          <CardContent sx={{ p: { xs: 3.5, md: 3 } }}>
            <Grid container sx={{ alignItems: "stretch" }}>
              <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 0, md: 4 } }}>
                <Typography variant="overline" color="primary.main">
                  Contacto
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    lineHeight: 1.15,
                  }}
                >
                  ¿Tienes un proyecto que necesita más que un dev?
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: 1.8, mb: 4, maxWidth: 520 }}
                >
                  Si tu equipo necesita a alguien que pueda escribir el código y
                  sentarse en la reunión con el cliente, podemos hablar. Sin
                  compromisos, sin relleno.
                </Typography>

                <Stack spacing={1.5}>
                  {[
                    { icon: "◎", text: "Respuesta en menos de 24 horas" },
                    { icon: "⬡", text: "Primera conversación sin compromiso" },
                    {
                      icon: "▣",
                      text: "Disponible para proyectos remotos, híbridos y presenciales",
                    },
                  ].map((item) => (
                    <Stack
                      key={item.text}
                      direction="row"
                      spacing={1.5}
                      sx={{ alignItems: "center" }}
                    >
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontSize: "0.9rem",
                          lineHeight: 1,
                        }}
                      >
                        {item.icon}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>

              <Grid
                sx={{
                  p: { xs: 0, md: 4 },
                  display: "flex",
                }}
              >
                <Divider orientation="vertical" />
              </Grid>

              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  p: { xs: 0, md: 4 },
                  mt: { xs: 4, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <Stack spacing={1.5}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href="https://wa.me/573016684406?text=Hola%20Will%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar."
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Escribeme al WhatsApp
                    <WhatsApp fontSize="small" sx={{ ml: 1 }} />
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    href="https://www.linkedin.com/in/willbarrios89"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Ver LinkedIn
                    <LinkedIn fontSize="small" sx={{ ml: 1 }} />
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    sx={{ flexGrow: 1, height: "1px", bgcolor: "divider" }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    o también
                  </Typography>
                  <Box
                    sx={{ flexGrow: 1, height: "1px", bgcolor: "divider" }}
                  />
                </Stack>

                <Stack spacing={1}>
                  {[
                    {
                      label: "GitHub",
                      href: "https://github.com/willbarriosc",
                      note: "Ver repositorios públicos",
                    },
                    {
                      label: "Mujer Oblicua",
                      href: "https://mujeroblicua.org",
                      note: "Ver proyecto destacado",
                    },
                  ].map((link) => (
                    <Stack
                      key={link.label}
                      direction="row"
                      component={Link}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        alignItems: "center",
                        justifyContent: "space-between",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          bgcolor: mode === "dark" ? "#34d39914" : "#34d3990d",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, color: "text.primary" }}
                      >
                        {link.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {link.note} →
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Main;
