import React, { useState, useEffect, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Avatar,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  LinearProgress,
  useScrollTrigger,
  Slide,
  Fade,
  Zoom,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import {
  GitHub,
  LinkedIn,
  Email,
  Download,
  OpenInNew,
  Close,
  Menu as MenuIcon,
  Analytics,
  Storage,
  Code,
  Psychology,
  TrendingUp,
  Business,
  People,
  LocalShipping,
  FlightTakeoff,
  ArrowForward,
  ArrowBack,
  CheckCircle,
  BarChart,
  DataObject,
  ChevronLeft,
  ChevronRight,
  AutoAwesome,
  School,
  WorkspacePremium,
  Handshake,
  Settings,
  CloudSync,
  Dashboard,
  Phone,
  Science,
  MenuBook,
} from "@mui/icons-material";
import opsimage from "../src/Images/Ops.png";
import ata1mage from "../src/Images/ATA1.png";
import ata2mage from "../src/Images/ATA2.png";
import HR1image from "../src/Images/HR1.png";
import HR2image from "../src/Images/HR2.png";
import HR3image from "../src/Images/HR3.png";
import OE1image from "../src/Images/OE1.png";
import OE2image from "../src/Images/OE2.png";
import OE3image from "../src/Images/OE3.png";
import OE4image from "../src/Images/OE4.png";

// ──────────────────────────────────────────────
// THEME
// ──────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: "dark",
    primary:   { main: "#00d4c8", light: "#5ffff2", dark: "#009e94" },
    secondary: { main: "#f59e0b" },
    background:{ default: "#04111f", paper: "#071829" },
    text:      { primary: "#e8f4fd", secondary: "#7a9bbf" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2.2rem,5vw,4.2rem)" },
    h2: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
    h4: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(0,212,200,0.09)",
          transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            border: "1px solid rgba(0,212,200,0.35)",
            boxShadow: "0 24px 48px rgba(0,212,200,0.07)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 10, fontWeight: 600 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: "rgba(0,212,200,0.07)",
          border: "1px solid rgba(0,212,200,0.18)",
          color: "#7ae8e3",
          fontWeight: 500,
          fontSize: "0.75rem",
        },
      },
    },
  },
});

// ──────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────

// ── NEW: Rotating role titles ──
const ROLES = [
  "Data Analyst",
  "BI Engineer",
  "Analytics Engineer",
  "AI Engineering Graduate",
  "Data Scientist",
  "Machine Learning Engineer",
  "Business Intelligence Developer",
];

// ── NEW: What I Do strip ──
const WHAT_I_DO = [
  { icon: <BarChart />,    label: "Business Intelligence" },
 // { icon: <Storage />,     label: "Data Engineering" },
  { icon: <Psychology />,  label: "Machine Learning" },
  { icon: <AutoAwesome />, label: "AI Engineering" },
  { icon: <Analytics />,   label: "Data Science" },
  { icon: <Code />,        label: "Analytics Engineering" },
   { icon: <Code />,        label: "Data Analyst" },
];

// ── NEW: Filter domains for project carousel ──
const ALL_DOMAINS = [
  "All",
  "Data Analyst",
  "BI Engineer",
  "Analytics Engineer",
  "AI Engineer",
  "Data Scientist",
  "Machine Learning",
];

const PERSONAL = {
  name: "Mukoma Emmanuel Sekweta",
  shortName: "Emmanuel Sekweta",
  initials: "ES",
  // ── UPDATED: umbrella title ──
  title: "Data & AI Professional",
  // ── UPDATED: umbrella bio ──
  bio: `Data & AI professional with end-to-end experience across the full analytics spectrum — from SQL Server ETL pipelines and Power BI dashboards to Python-based machine learning and AI-driven automation. Experienced in transforming raw operational data into strategic insights within safety-critical aviation environments. Equally comfortable building executive BI solutions, engineering data pipelines, designing ML models, or embedding AI capabilities into digital products.`,
  email: "manusekweta@gmail.com",
  phone: "0608975272",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  location: "Johannesburg, South Africa",
  resumeUrl: "#",
};

const TECH_STACK = [
  { label: "SQL Server",     icon: <Storage fontSize="small" /> },
  { label: "Power BI",       icon: <BarChart fontSize="small" /> },
  { label: "SSIS",           icon: <DataObject fontSize="small" /> },
  { label: "Power Apps",     icon: <Dashboard fontSize="small" /> },
  { label: "Power Automate", icon: <CloudSync fontSize="small" /> },
  { label: "Python",         icon: <Code fontSize="small" /> },
  { label: "DAX",            icon: <Analytics fontSize="small" /> },
  { label: "SharePoint",     icon: <Settings fontSize="small" /> },
  { label: "React",          icon: <Code fontSize="small" /> },
  { label: "Node.js",        icon: <Code fontSize="small" /> },
  { label: "PostgreSQL",     icon: <Storage fontSize="small" /> },
];

const SKILLS = [
  { name: "Power BI",          level: 95, category: "BI" },
  { name: "SQL Server",        level: 92, category: "Database" },
  { name: "SSIS",              level: 88, category: "ETL" },
  { name: "DAX",               level: 85, category: "Analytics" },
  { name: "Power Apps",        level: 80, category: "Power Platform" },
  { name: "Power Automate",    level: 82, category: "Power Platform" },
  { name: "SharePoint",        level: 78, category: "Collaboration" },
  { name: "Python",            level: 75, category: "Programming" },
  { name: "Scikit-learn",      level: 70, category: "ML" },
  { name: "React / JS",        level: 78, category: "Frontend" },
  { name: "Node.js / Express", level: 74, category: "Backend" },
  { name: "PostgreSQL",        level: 72, category: "Database" },
];

// ── UPDATED: Projects reordered (Data Mining moved to #2) + domains added ──
const PROJECTS = [
  {
    id: 1,
    title: "Operational Efficiency Dashboard",
    tag: "Flagship Project",
    icon: <FlightTakeoff />,
    domain: "Aviation Operations",
    // ── NEW ──
    domains: ["Data Analyst", "BI Engineer", "Analytics Engineer"],
    summary: "Automated end to end ATM data pipeline with a Power BI dashboard monitoring critical operational KPIs including flights delivered vs capacity, slot loss analysis, and CTOT compliance.",
    problem: "Operations teams lacked real time visibility across fragmented ATM systems, with reporting done manually and delayed by days.",
    solution: "Designed an SSIS package that extracts ATM score files from a designated folder, transforms and loads them into SQL Server via a 04:00 AM scheduled job. Built a Power BI dashboard consuming this data with full KPI framework.",
    impact: [
      "40% reduction in reporting time",
      "Dashboards refresh automatically daily, delivering always current insights",
      "Real time visibility into flight slot loss by aircraft category",
      "Evidence-based scheduling decisions enabled for management",
      "Automated executive reporting replacing manual processes",
    ],
    tech: ["SQL Server", "SSIS", "Power BI", "DAX", "Power Query", "T-SQL"],
    highlights: ["ETL Pipeline", "Star Schema", "KPI Framework", "Automation", "Scheduled Jobs"],
    color: "#00d4c8",
    screenshots: [opsimage],
  },

  // ── MOVED UP: was id:6, now second in carousel ──
  {
    id: 6,
    title: "Data Mining for SME Sales Optimisation",
    tag: "Academic Research",
    icon: <Science />,
    domain: "Machine Learning · Data Mining · BSc Honours",
    // ── NEW ──
    domains: ["Data Scientist", "Machine Learning", "AI Engineer"],
    summary: "Honours research applying Apriori and FP-Growth association rule mining algorithms to a real-world grocery dataset to uncover purchasing patterns and generate actionable sales improvement strategies for Small and Medium Enterprises (SMEs).",
    problem: "SMEs contribute significantly to economic growth yet are constrained by limited cash flow and uninformed decision-making. Despite large volumes of transactional data, SMEs lacked practical frameworks to extract meaningful sales insights from it.",
    solution: "Conducted an end-to-end data mining pipeline using Python and WEKA: sourced the BigBasket grocery dataset (Kaggle), performed data preparation and cleaning, and implemented both the Apriori and FP-Growth algorithms to generate association rules. Evaluated rules using Support, Confidence, and Lift metrics. Compared algorithm performance and recommended optimal parameter configurations for SME-scale datasets.",
    impact: [
      "Generated actionable product association rules guiding targeted promotions and bundle strategies",
      "Demonstrated FP-Growth outperforms Apriori in speed on large itemsets while maintaining rule quality",
      "Provided SMEs with a replicable, cost effective data mining framework using open-source tools",
      "Research contributed to bridging the gap between academic data mining and practical SME application",
      "Submitted in partial fulfilment of BSc Honours in Computer Science University of Limpopo (2023)",
    ],
    tech: ["Python", "WEKA", "Apriori Algorithm", "FP-Growth Algorithm", "Scikit-learn", "Pandas", "Association Rule Mining"],
    highlights: ["Association Rules", "FP-Growth", "Apriori", "Market Basket Analysis", "SME Analytics", "Academic Research"],
    color: "#e879f9",
    screenshots: [],
  },

  {
    id: 2,
    title: "ATA Data Integration & Reporting",
    tag: "Data Integration",
    icon: <School />,
    domain: "Aviation Training Academy",
    // ── NEW ──
    domains: ["Analytics Engineer", "BI Engineer", "Data Analyst"],
    summary: "Designed and implemented a unified data platform for the Aviation Training Academy, bridging a legacy SQL Server system and a new operational system into a single reporting database enabling Power BI dashboards that give management a complete, real-time view of training and operational performance.",
    problem: "The ATA was running two separate systems on different databases a legacy SQL Server system and a newly introduced operational system. Neither could speak to the other, meaning management had no consolidated view of the data. Reporting required painful manual effort across two disconnected sources, and the new system alone couldn't tell the full story without historical context from the legacy platform.",
    solution: "Architected a unified SQL Server database to serve as the single source of truth. Built an SSIS pipeline to extract and load data from the legacy SQL Server system into the unified database. A scheduled ETL job running nightly at 2AM pulled fresh data from the new operational system and loaded it into the same unified database, keeping both historical and current data in sync. Power BI was then connected directly to the unified database, enabling dashboards that draw seamlessly from both systems without any manual intervention.",
    impact: [
      "Eliminated the data silo between the legacy and new operational systems",
      "Dashboards refresh automatically daily, delivering always current insights",
      "Fully automated nightly data loads with zero manual intervention required",
      "Gave management a single, trustworthy view combining historical and current operational data",
      "Unlocked reporting that was previously impossible due to system fragmentation",
      "Reduced manual data consolidation effort dramatically across reporting cycles",
    ],
    tech: ["SSIS", "SQL Server", "Power BI", "DAX", "Power Query", "SQL Agent Jobs", "ETL"],
    highlights: ["Legacy System Integration", "Nightly ETL Pipeline", "Unified Data Warehouse", "Automated Data Loads"],
    color: "#f59e0b",
    screenshots: [ata1mage, ata2mage],
  },

  {
    id: 5,
    title: "Obstacle Evaluation Dashboard",
    tag: "Safety-Critical",
    icon: <Analytics />,
    domain: "Aviation Compliance",
    // ── NEW ──
    domains: ["BI Engineer", "Analytics Engineer", "Data Analyst"],
    summary: "End to end Power Platform solution that modernised obstacle evaluation tracking migrating from fragmented Excel based workflows to a centralised SharePoint system with automated data pipelines and a multi-tab Power BI dashboard for real time project visibility.",
    problem: "Obstacle evaluation projects were tracked manually in Excel spreadsheets, making it nearly impossible to monitor project health, specialist workload, compliance deadlines, and evaluation status across hundreds of active projects simultaneously.",
    solution: "Built a full Power Platform pipeline: Power Apps was used as the structured data entry interface, replacing ad-hoc Excel input. Power Automate migrated and synced the data to SharePoint, applying data format transformations along the way. Power Query handled additional cleansing and shaping, and Power BI connected directly to SharePoint to visualise project overviews, specialist performance, and project health metrics across three dedicated tabs — with drill-through functionality enabling stakeholders to move from high-level summaries into granular project-level detail seamlessly.",
    impact: [
      "Centralised 561+ obstacle projects into a single, maintainable SharePoint data source",
      "Dashboards refresh automatically daily, delivering always current insights",
      "Eliminated manual Excel maintenance and reduced data entry errors through Power Apps",
      "Automated data migration and formatting via Power Automate, saving significant manual effort",
      "Enabled real-time tracking of evaluation stages, overdue projects, and specialist workload allocation",
      "Drill through pages allow stakeholders to investigate individual projects and lifespan details without leaving the dashboard",
    ],
    tech: ["Power BI", "Power Apps", "Power Automate", "SharePoint", "Power Query", "DAX", "Excel"],
    highlights: ["Power Platform Pipeline", "Data Migration", "Compliance Tracking", "Project Health Monitoring", "Drill-Through Analysis"],
    color: "#60a5fa",
    screenshots: [OE1image, OE2image, OE3image],
  },

  {
    id: 3,
    title: "HR Recruitment Dashboard",
    tag: "People Analytics",
    icon: <Analytics />,
    domain: "Human Resources",
    // ── NEW ──
    domains: ["Data Analyst", "BI Engineer", "Analytics Engineer"],
    summary: "End to end Power Platform solution built for HR spanning a Power Apps data entry system, SharePoint as the centralised data store, automated report delivery via Power Automate, and a multi tab Power BI dashboard giving stakeholders real-time visibility into recruitment performance, workforce diversity, and pipeline conversion.",
    problem: "HR teams had no structured, centralised way to capture and track recruitment data. Information was scattered, reporting was manual and timeconsuming, and there was no easy way to share insights or export data for downstream use making it nearly impossible to monitor hiring pipelines, diversity metrics, and candidate conversion rates consistently across departments.",
    solution: "Architected a full Power Platform pipeline from data entry to insight delivery. Power Apps was built as the structured front-end for HR staff to capture recruitment data consistently, eliminating unstructured inputs. All submitted data was saved directly to SharePoint, serving as the central and maintainable data store. Power Automate was configured to automatically send scheduled report emails to stakeholders and enable on-demand Excel file downloads for offline analysis. Power BI connected to SharePoint to deliver a multi-tab dashboard covering recruitment overviews, diversity and talent analytics, and pipeline conversion — with automatic scheduled refreshes ensuring dashboards always reflect the latest submissions.",
    impact: [
      "Replaced unstructured data capture with a governed Power Apps entry system",
      "Centralised all recruitment data in SharePoint, making it auditable and maintainable",
      "Automated report delivery via Power Automate, eliminating manual distribution",
      "Enabled stakeholders to download live Excel exports on demand",
      "Dashboards refresh automatically, delivering always current insights without manual effort",
      "Enhanced workforce diversity reporting across race, gender, age, and nationality",
      "Improved pipeline transparency with stage by stage conversion tracking",
    ],
    tech: ["Power Apps", "SharePoint", "Power Automate", "Power BI", "Power Query", "DAX"],
    highlights: ["Power Platform Pipeline", "Automated Report Delivery", "Diversity & Inclusion", "Pipeline Conversion"],
    color: "#34d399",
    screenshots: [HR1image, HR2image, HR3image],
  },

  {
    id: 4,
    title: "Process Automation & Reporting",
    tag: "Power Platform",
    icon: <CloudSync />,
    domain: "Power Automate · SharePoint",
    // ── NEW ──
    domains: ["Analytics Engineer", "AI Engineer", "Data Analyst"],
    summary: "Automated reporting workflows using Power Automate and SharePoint integration extracting, transforming, and routing data from Excel to SharePoint to final reports with zero manual intervention.",
    problem: "Reporting processes relied on manual Excel updates, email chains, and manual uploads to SharePoint, creating delays and inconsistency.",
    solution: "Developed automated Power Automate flows for data extraction, transformation, and scheduled delivery. Implemented SharePoint list integration for structured data capture and management via Power Apps.",
    impact: [
      "Eliminated manual reporting effort across key workflows",
      "Improved process reliability and communication efficiency",
      "Structured data capture via Power Apps forms",
      "Consistent, on time delivery of scheduled reports",
    ],
    tech: ["Power Automate", "Power Apps", "SharePoint", "Excel", "SQL Server"],
    highlights: ["End to End Automation", "SharePoint Integration", "Power Apps Forms", "Workflow Design"],
    color: "#a78bfa",
    screenshots: ["/images/automate/auto1.png", "/images/automate/auto2.png"],
  },
];

const EDUCATION = [
  {
    degree: "BSc Honours – Computer Sciences",
    institution: "University",
    type: "degree",
    icon: <School />,
    color: "#00d4c8",
  },
  {
    degree: "BSc – Mathematical Sciences",
    institution: "University",
    type: "degree",
    icon: <School />,
    color: "#00d4c8",
  },
];

const CERTIFICATIONS = [
  {
    name: "Microsoft Power BI Professional Certificate",
    issuer: "Microsoft",
    status: "Completed",
    icon: <WorkspacePremium />,
    color: "#f59e0b",
  },
  {
    name: "Data Science, ML & Python with TensorFlow, Pandas & More",
    issuer: "Udemy",
    status: "Enrolled",
    icon: <AutoAwesome />,
    color: "#34d399",
  },
];

const RESEARCH = [
  {
    title: "The Use of Data Mining Techniques to Improve Sales for Small to Medium Sized Businesses",
    type: "BSc Honours Research",
    institution: "University of Limpopo  Faculty of Science & Agriculture",
    supervisor: "Dr J. Tlouyamma",
    year: "2023",
    abstract: "Investigates the application of data mining methods specifically the FP-Growth and Apriori association rule algorithms for improving sales performance in SMEs. Applied to the BigBasket grocery dataset (Kaggle). Evaluated using Support, Confidence, and Lift metrics to generate actionable purchasing pattern insights.",
    keywords: ["Association Rule Mining", "Apriori", "FP-Growth", "SMEs", "WEKA", "Python", "Market Basket Analysis"],
    color: "#e879f9",
  },
];

const NAV_LINKS = ["Home", "About", "Projects", "Research", "Skills", "Contact"];

// ──────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <Box sx={{ mb: 7, textAlign: "center" }}>
      <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.2em", fontWeight: 700 }}>
        {subtitle}
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>{title}</Typography>
      <Box sx={{ width: 70, height: 4, borderRadius: 10, mx: "auto", background: "linear-gradient(90deg,#00d4c8,#f59e0b)" }} />
    </Box>
  );
}

// ──────────────────────────────────────────────
// NAVBAR
// ──────────────────────────────────────────────
function NavBar({ onNav }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          sx={{
            bgcolor: "rgba(4,17,31,0.88)",
            backdropFilter: "blur(18px)",
            borderBottom: "1px solid rgba(0,212,200,0.08)",
          }}
        >
          <Toolbar
            sx={{
              maxWidth: 1200,
              mx: "auto",
              width: "100%",
              px: { xs: 2, md: 4 },
              display: "flex",
              alignItems: "center",
            }}
          >
            {isMobile ? (
              <Box sx={{ ml: "auto" }}>
                <IconButton onClick={() => setMobileOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 0.5 }}>
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link}
                    color="inherit"
                    onClick={() => onNav(link)}
                    sx={{ px: 2, fontSize: "0.85rem", "&:hover": { color: "primary.main" } }}
                  >
                    {link}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { bgcolor: "background.default", borderLeft: "1px solid rgba(0,212,200,0.12)" },
        }}
      >
        <Box sx={{ width: 240, p: 3 }}>
          <Typography variant="h6" sx={{ color: "primary.main", mb: 3, fontFamily: "'Playfair Display', serif" }}>
            ES.
          </Typography>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link} disablePadding>
                <ListItemButton
                  onClick={() => { onNav(link); setMobileOpen(false); }}
                  sx={{ borderRadius: 2, mb: 0.5, "&:hover": { bgcolor: "rgba(0,212,200,0.06)" } }}
                >
                  <ListItemText primary={link} primaryTypographyProps={{ fontWeight: 500 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

// ──────────────────────────────────────────────
// HERO  — updated with rotating role title
// ──────────────────────────────────────────────
function HeroSection({ sectionRef }) {
  // ── NEW: rotating role index ──
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out → change → fade in
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setVisible(true);
      }, 350);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box ref={sectionRef} sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background mesh */}
      <Box sx={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,212,200,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(245,158,11,0.04) 0%, transparent 60%)",
      }} />
      {/* Grid lines */}
      <Box sx={{
        position: "absolute", inset: 0, zIndex: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(0,212,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Fade in timeout={900}>
              <Box>
                {/* ── UPDATED: rotating role subtitle ── */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5, minHeight: 28 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: "primary.main", borderRadius: 1, flexShrink: 0 }} />
                  <Fade in={visible} timeout={300}>
                    <Typography
                      variant="overline"
                      sx={{ color: "primary.main", letterSpacing: "0.22em", fontWeight: 700, fontSize: "0.72rem" }}
                    >
                      {ROLES[roleIndex]}
                    </Typography>
                  </Fade>
                </Box>

                <Typography variant="h1" sx={{ mb: 3, lineHeight: 1.15 }}>
                  Hi, I'm{" "}
                  <Box component="span" sx={{ background: "linear-gradient(135deg,#00d4c8 20%,#f59e0b 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {PERSONAL.shortName}
                  </Box>
                </Typography>

                <Typography sx={{ color: "text.secondary", lineHeight: 2, maxWidth: 580, mb: 4, fontSize: "1rem" }}>
                  {PERSONAL.bio}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    size="large"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    sx={{ px: 3.5, background: "linear-gradient(135deg,#00d4c8,#009e94)", "&:hover": { background: "linear-gradient(135deg,#5ffff2,#00d4c8)" } }}
                  >
                    View Projects
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <Zoom in timeout={1000}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{
                  position: "absolute", inset: -16, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0,212,200,0.12) 0%, transparent 70%)",
                }} />
                <Avatar sx={{
                  width: 260, height: 260, fontSize: "5rem",
                  bgcolor: "rgba(0,212,200,0.06)",
                  border: "2px solid rgba(0,212,200,0.25)",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "primary.main",
                  boxShadow: "0 0 60px rgba(0,212,200,0.1)",
                }}>
                  {PERSONAL.initials}
                </Avatar>
                <Box sx={{
                  position: "absolute", bottom: 10, right: -20,
                  bgcolor: "background.paper", border: "1px solid rgba(0,212,200,0.2)",
                  borderRadius: 3, px: 2, py: 1, display: "flex", alignItems: "center", gap: 1,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#34d399" }} />
                  <Typography sx={{ fontSize: "0.75rem", color: "text.secondary", whiteSpace: "nowrap" }}>
                    Johannesburg, SA
                  </Typography>
                </Box>
              </Box>
            </Zoom>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ──────────────────────────────────────────────
// NEW: WHAT I DO STRIP — sits between Hero & About
// ──────────────────────────────────────────────
function WhatIDoSection() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 6 },
        borderTop: "1px solid rgba(0,212,200,0.08)",
        borderBottom: "1px solid rgba(0,212,200,0.08)",
        bgcolor: "rgba(0,212,200,0.02)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            display: "block",
            textAlign: "center",
            color: "text.secondary",
            letterSpacing: "0.22em",
            fontWeight: 700,
            fontSize: "0.68rem",
            mb: 4,
          }}
        >
          What I Do
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 3 },
          }}
        >
          {WHAT_I_DO.map(({ icon, label }) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                px: { xs: 2, md: 3 },
                py: 1.5,
                borderRadius: 3,
                border: "1px solid rgba(0,212,200,0.14)",
                bgcolor: "background.paper",
                transition: "0.3s ease",
                cursor: "default",
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(0,212,200,0.05)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 24px rgba(0,212,200,0.08)",
                },
              }}
            >
              <Box sx={{ color: "primary.main", display: "flex", alignItems: "center" }}>
                {icon}
              </Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "text.primary",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ──────────────────────────────────────────────
// ABOUT
// ──────────────────────────────────────────────
function AboutSection({ sectionRef }) {
  return (
    <Box ref={sectionRef} id="about" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(7,24,41,0.7)", borderTop: "1px solid rgba(0,212,200,0.06)" }}>
      <Container maxWidth="lg">
        <SectionHeading title="About Me" subtitle="Background & Expertise" />
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2.5, lineHeight: 1.95, fontSize: "0.97rem" }}>
              Strategy, Research, Development and Innovation (SRDI) Graduate Engineer at{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                ATNS (Air Traffic and Navigation Services)
              </Box>
              , where I build end to end analytics solutions from ETL pipelines to executive Power BI dashboards used in safety critical aviation operations.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2.5, lineHeight: 1.95, fontSize: "0.97rem" }}>
              I work closely with stakeholders to turn business requirements into reliable, automated reporting solutions. I'm also actively expanding into Python-based machine learning and predictive analytics, bridging the gap between traditional business intelligence and modern data science.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3.5, lineHeight: 1.95, fontSize: "0.97rem" }}>
              My foundation includes a software engineering background giving me a full stack perspective when designing data products, APIs, and automated reporting pipelines.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { label: "Location",               value: PERSONAL.location },
                { label: "Current Role",           value: "SRDI Graduate Engineer – BI & Reporting, ATNS" },
                { label: "Focus Areas",            value: "ETL Pipelines · Power BI · Power Platform · Operational Analytics" },
                { label: "Software Background",    value: "React · Node.js · Express · PostgreSQL · JavaScript" },
                { label: "Stakeholder Engagement", value: "Liaising with management, clients & internal teams on reporting requirements" },
                { label: "Currently Learning",     value: "ML Engineering · TensorFlow · Advanced Python" },
              ].map(({ label, value }) => (
                <Box key={label} sx={{ display: "flex", gap: 1.5 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "primary.main", mt: "8px", flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "primary.main", textTransform: "uppercase", letterSpacing: "0.1em", mb: 0.2 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.88rem", color: "text.secondary", lineHeight: 1.7 }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h5" sx={{ mb: 4, color: "text.primary", fontWeight: 600, textAlign: { xs: "center", md: "left" } }}>
              Technical Proficiency
            </Typography>
            <Box sx={{ width: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
              {SKILLS.map(({ name, level, category }) => (
                <Box
                  key={name}
                  sx={{ width: "100%", p: 2, borderRadius: 3, bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                      <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "text.primary" }}>
                        {name}
                      </Typography>
                      <Chip label={category} size="small" sx={{ fontSize: "0.62rem", height: 18 }} />
                    </Box>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={level}
                    sx={{
                      height: 6, borderRadius: 4, bgcolor: "rgba(255,255,255,0.05)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 4,
                        background:
                          level >= 88 ? "linear-gradient(90deg,#00d4c8,#5ffff2)"
                          : level >= 75 ? "linear-gradient(90deg,#f59e0b,#fcd34d)"
                          : "linear-gradient(90deg,#a78bfa,#c4b5fd)",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ──────────────────────────────────────────────
// PROJECTS — HORIZONTAL CAROUSEL with filter bar
// ──────────────────────────────────────────────
function ProjectCard({ project, onOpen }) {
  return (
    <Card
      onClick={() => onOpen(project)}
      sx={{
        width: { xs: "82vw", sm: 360 },
        minWidth: { xs: "82vw", sm: 360 },
        maxWidth: 390,
        flexShrink: 0,
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ p: 3.5, flex: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2.5 }}>
          <Box sx={{
            width: 52, height: 52, borderRadius: 2.5,
            bgcolor: `${project.color}12`,
            border: `1px solid ${project.color}25`,
            color: project.color,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {project.icon}
          </Box>
          <Chip
            label={project.tag}
            size="small"
            sx={{ bgcolor: `${project.color}10`, border: `1px solid ${project.color}25`, color: project.color, fontWeight: 600, fontSize: "0.65rem" }}
          />
        </Box>

        <Typography variant="overline" sx={{ color: "text.secondary", fontSize: "0.68rem", letterSpacing: "0.1em" }}>
          {project.domain}
        </Typography>
        <Typography variant="h5" sx={{ mt: 0.5, mb: 1.5, lineHeight: 1.3, fontFamily: "'Playfair Display', serif" }}>
          {project.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.85, fontSize: "0.88rem", mb: 3 }}>
          {project.summary}
        </Typography>

        {/* ── NEW: role domain chips on card ── */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6, mb: 2 }}>
          {project.domains.map((d) => (
            <Chip
              key={d}
              label={d}
              size="small"
              sx={{
                bgcolor: "rgba(245,158,11,0.07)",
                border: "1px solid rgba(245,158,11,0.2)",
                color: "#f59e0b",
                fontSize: "0.62rem",
                height: 18,
                fontWeight: 600,
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {project.tech.slice(0, 4).map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
          {project.tech.length > 4 && (
            <Chip label={`+${project.tech.length - 4}`} size="small" sx={{ opacity: 0.6 }} />
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ px: 3.5, pb: 3 }}>
        <Button
          endIcon={<ArrowForward />}
          sx={{ color: "primary.main", p: 0, "&:hover": { bgcolor: "transparent", opacity: 0.75 } }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

function ProjectsSection({ sectionRef }) {
  const [openProject, setOpenProject] = useState(null);
  // ── NEW: active domain filter ──
  const [activeFilter, setActiveFilter] = useState("All");
  const trackRef = useRef(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const CARD_WIDTH = 376;
  const GAP = 24;

  // ── NEW: filtered projects ──
  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.domains.includes(activeFilter));

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [filteredProjects]);

  // Reset scroll when filter changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = 0;
    }
    checkScroll();
  }, [activeFilter]);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({
      left: dir === "left" ? -(CARD_WIDTH + GAP) : (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  return (
    <Box ref={sectionRef} id="projects" component="section" sx={{ py: { xs: 8, md: 12 }, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />

        {/* ── NEW: Domain filter bar ── */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            mb: 6,
          }}
        >
          {ALL_DOMAINS.map((domain) => (
            <Chip
              key={domain}
              label={domain}
              onClick={() => setActiveFilter(domain)}
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.78rem",
                px: 0.5,
                transition: "0.25s ease",
                ...(activeFilter === domain
                  ? {
                      background: "linear-gradient(135deg,#00d4c8,#009e94)",
                      border: "1px solid #00d4c8",
                      color: "#04111f",
                    }
                  : {
                      bgcolor: "rgba(0,212,200,0.05)",
                      border: "1px solid rgba(0,212,200,0.18)",
                      color: "#7ae8e3",
                      "&:hover": {
                        bgcolor: "rgba(0,212,200,0.12)",
                        borderColor: "primary.main",
                      },
                    }),
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Carousel outer */}
      <Box sx={{ position: "relative" }}>
        <Box sx={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(90deg, #04111f 0%, transparent 100%)",
          opacity: canScrollLeft ? 1 : 0, transition: "opacity 0.3s",
        }} />
        <Box sx={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(270deg, #04111f 0%, transparent 100%)",
          opacity: canScrollRight ? 1 : 0, transition: "opacity 0.3s",
        }} />

        <Box
          ref={trackRef}
          sx={{
            display: "flex",
            gap: `${GAP}px`,
            overflowX: "auto",
            overflowY: "visible",
            px: { xs: 2, sm: 4, md: 8 },
            pb: 3, pt: 1,
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { height: 6 },
            "&::-webkit-scrollbar-track": { bgcolor: "rgba(255,255,255,0.03)", borderRadius: 10 },
            "&::-webkit-scrollbar-thumb": { background: "rgba(0,212,200,0.25)", borderRadius: 10, "&:hover": { background: "rgba(0,212,200,0.45)" } },
            alignItems: "stretch",
          }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Box key={project.id} sx={{ scrollSnapAlign: "start" }}>
                <ProjectCard project={project} onOpen={setOpenProject} />
              </Box>
            ))
          ) : (
            <Box sx={{ mx: "auto", py: 8, textAlign: "center", width: "100%" }}>
              <Typography sx={{ color: "text.secondary" }}>No projects match this filter yet.</Typography>
            </Box>
          )}
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "flex-end", mt: 2 }}>
            <IconButton
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              sx={{
                border: "1px solid rgba(0,212,200,0.2)", bgcolor: "background.paper", width: 44, height: 44,
                "&:hover": { bgcolor: "rgba(0,212,200,0.08)", borderColor: "primary.main" },
                "&.Mui-disabled": { opacity: 0.3 },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              sx={{
                border: "1px solid rgba(0,212,200,0.2)", bgcolor: "background.paper", width: 44, height: 44,
                "&:hover": { bgcolor: "rgba(0,212,200,0.08)", borderColor: "primary.main" },
                "&.Mui-disabled": { opacity: 0.3 },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Container>
      </Box>

      <ProjectDialog project={openProject} onClose={() => setOpenProject(null)} />
    </Box>
  );
}

// ──────────────────────────────────────────────
// PROJECT DIALOG
// ──────────────────────────────────────────────
function SectionBlock({ title, color, children }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, color, mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function ProjectDialog({ project, onClose }) {
  const scrollRef = useRef(null);
  if (!project) return null;

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({ left: direction === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <Dialog
      open={!!project}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      scroll="paper"
      PaperProps={{ sx: { bgcolor: "background.paper", border: "1px solid rgba(0,212,200,0.15)", borderRadius: 3 } }}
    >
      <DialogTitle sx={{ pt: 3, pb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <Box sx={{
              width: 52, height: 52, borderRadius: 2.5,
              bgcolor: `${project.color}12`,
              border: `1px solid ${project.color}25`,
              color: project.color,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {project.icon}
            </Box>
            <Box>
              <Typography variant="h4" sx={{ lineHeight: 1.25 }}>{project.title}</Typography>
              <Typography color="text.secondary" sx={{ fontSize: "0.85rem" }}>{project.domain}</Typography>
              {/* ── NEW: role domains in dialog ── */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6, mt: 0.8 }}>
                {project.domains.map((d) => (
                  <Chip
                    key={d}
                    label={d}
                    size="small"
                    sx={{
                      bgcolor: "rgba(245,158,11,0.07)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      color: "#f59e0b",
                      fontSize: "0.62rem",
                      height: 18,
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <IconButton onClick={onClose} sx={{ "&:hover": { bgcolor: "rgba(0,212,200,0.08)" } }}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers sx={{ borderColor: "rgba(0,212,200,0.1)" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SectionBlock title="Business Problem" color="error.main">
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85, fontSize: "0.92rem" }}>{project.problem}</Typography>
            </SectionBlock>
            <SectionBlock title="Solution Delivered" color="primary.main">
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85, fontSize: "0.92rem" }}>{project.solution}</Typography>
            </SectionBlock>
            <SectionBlock title="Key Highlights" color="secondary.main">
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {project.highlights.map((h) => (
                  <Chip key={h} label={h} size="small" sx={{ bgcolor: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20` }} />
                ))}
              </Box>
            </SectionBlock>
          </Grid>

          <Grid item xs={12} md={6}>
            <SectionBlock title="Impact & Outcomes" color="success.main">
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {project.impact.map((item, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 1.5 }}>
                    <CheckCircle sx={{ color: "success.main", fontSize: 17, mt: "3px" }} />
                    <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.7 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </SectionBlock>
            <SectionBlock title="Tech Stack" color="secondary.main">
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {project.tech.map((tech) => (<Chip key={tech} label={tech} size="small" />))}
              </Box>
            </SectionBlock>
          </Grid>
        </Grid>

        {project.screenshots && project.screenshots.length > 0 && (
          <SectionBlock title="Application Screenshots" color="primary.main">
            <Box sx={{ position: "relative" }}>
              <IconButton
                onClick={() => scroll("left")}
                sx={{
                  position: "absolute", left: -14, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                  bgcolor: "background.default", border: "1px solid rgba(0,212,200,0.2)",
                  "&:hover": { bgcolor: "rgba(0,212,200,0.06)" },
                }}
              >
                <ChevronLeft />
              </IconButton>

              <Box
                ref={scrollRef}
                sx={{
                  display: "flex", gap: 2, overflowX: "auto", scrollBehavior: "smooth", pb: 2,
                  "&::-webkit-scrollbar": { height: 6 },
                  "&::-webkit-scrollbar-thumb": { background: "rgba(0,212,200,0.25)", borderRadius: 10 },
                }}
              >
                {project.screenshots.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: 340, height: 210, borderRadius: 2.5, overflow: "hidden", flexShrink: 0,
                      border: "1px solid rgba(0,212,200,0.12)", bgcolor: "rgba(0,212,200,0.03)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "0.3s ease",
                      "&:hover": { transform: "translateY(-3px)", borderColor: "primary.main" },
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      onClick={() => window.open(img, "_blank")}
                      onError={(e) => { e.target.style.display = "none"; }}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                    />
                  </Box>
                ))}
              </Box>

              <IconButton
                onClick={() => scroll("right")}
                sx={{
                  position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                  bgcolor: "background.default", border: "1px solid rgba(0,212,200,0.2)",
                  "&:hover": { bgcolor: "rgba(0,212,200,0.06)" },
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </SectionBlock>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ──────────────────────────────────────────────
// SKILLS SECTION — updated with AI & Emerging Tech domain
// ──────────────────────────────────────────────
function SkillsSection({ sectionRef }) {
  const domains = [
    // ── NEW: AI & Emerging Tech domain first ──
    {
      title: "AI & Emerging Tech",
      icon: <AutoAwesome sx={{ fontSize: 26 }} />,
      color: "#e879f9",
      items: [
        "LLM API integration & prompt engineering",
        "AI-assisted workflow automation & decision-support",
        "Exploratory AI tool adoption & evaluation",
        "TensorFlow & deep learning (currently learning – Udemy)",
        "Association Rule Mining (Apriori, FP-Growth) — Honours Research",
        "AI-driven reporting & intelligent pipeline design",
      ],
    },
    {
      title: "ML & Python",
      icon: <Psychology sx={{ fontSize: 26 }} />,
      color: "#f87171",
      items: [
        "Python (Pandas, NumPy, Matplotlib, Seaborn)",
        "Scikit-learn (classification, regression, clustering)",
        "XGBoost & ensemble methods",
        "Association Rule Mining (Apriori, FP-Growth) — Honours Research",
        "TensorFlow & deep learning (currently learning – Udemy)",
      ],
    },
    {
      title: "Data Engineering",
      icon: <Storage sx={{ fontSize: 26 }} />,
      color: "#00d4c8",
      items: [
        "SQL Server (T-SQL, stored procs, views, indexes)",
        "SSIS packages & ETL pipeline automation",
        "Data modelling (star schema / snowflake)",
        "Azure Data Factory (foundational)",
      ],
    },
    {
      title: "Business Intelligence",
      icon: <BarChart sx={{ fontSize: 26 }} />,
      color: "#f59e0b",
      items: [
        "Power BI (Desktop, Report, Service)",
        "DAX calculated measures, KPIs & time intelligence",
        "Power Query (M language transformations)",
        "Executive, operational & compliance dashboards",
      ],
    },
    {
      title: "Power Platform",
      icon: <Dashboard sx={{ fontSize: 26 }} />,
      color: "#a78bfa",
      items: [
        "Power Automate – end-to-end workflow automation",
        "Power Apps – data-driven form and app development",
        "SharePoint list integration & document management",
        "Excel-to-SharePoint-to-report automated pipelines",
      ],
    },
    {
      title: "Analytics & Reporting",
      icon: <TrendingUp sx={{ fontSize: 26 }} />,
      color: "#34d399",
      items: [
        "Operational KPI frameworks & performance monitoring",
        "Root cause analysis & variance reporting",
        "Stakeholder engagement – requirements gathering & change management",
        "User manuals, training materials & presentation delivery",
      ],
    },
    {
      title: "Software Engineering",
      icon: <Code sx={{ fontSize: 26 }} />,
      color: "#fb923c",
      items: [
        "React.js – component-driven UI development",
        "Node.js & Express – RESTful API design & development",
        "PostgreSQL – relational database design & querying",
        "JavaScript (ES6+) – frontend & backend scripting",
        "Version control with Git & GitHub",
      ],
    },
    {
      title: "Soft Skills & Domain",
      icon: <Handshake sx={{ fontSize: 26 }} />,
      color: "#60a5fa",
      items: [
        "Stakeholder & client engagement",
        "Safety-critical data environments (aviation)",
        "Technical documentation & process documentation",
        "Cross-functional collaboration with management",
      ],
    },
  ];

  return (
    <Box ref={sectionRef} id="skills" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(7,24,41,0.7)", borderTop: "1px solid rgba(0,212,200,0.06)" }}>
      <Container maxWidth="lg">
        <SectionHeading title="Skills & Expertise" subtitle="Domains I work across" />
        <Grid container spacing={3}>
          {domains.map(({ title, icon, color, items }) => (
            <Grid item xs={12} sm={6} lg={4} key={title}>
              <Card sx={{ height: "100%", p: 0.5 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                    <Box sx={{
                      width: 50, height: 50, borderRadius: 2, bgcolor: `${color}10`, border: `1px solid ${color}20`,
                      display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0,
                    }}>
                      {icon}
                    </Box>
                    <Typography variant="h5" sx={{ color: "text.primary", fontFamily: "'Playfair Display', serif", lineHeight: 1.25 }}>
                      {title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                    {items.map((item) => (
                      <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: color, mt: "8px", flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.86rem" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ──────────────────────────────────────────────
// EDUCATION & CERTIFICATIONS
// ──────────────────────────────────────────────
function EducationSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading title="Education & Certifications" subtitle="Qualifications" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.2em", fontWeight: 700, display: "block", mb: 2.5 }}>
              Certifications & Courses
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {CERTIFICATIONS.map((cert) => (
                <Box
                  key={cert.name}
                  sx={{
                    p: 3, borderRadius: 3, bgcolor: "background.paper",
                    border: "1px solid rgba(0,212,200,0.1)",
                    display: "flex", gap: 2, alignItems: "flex-start",
                    transition: "0.3s", "&:hover": { borderColor: "rgba(0,212,200,0.3)" },
                  }}
                >
                  <Box sx={{
                    width: 42, height: 42, borderRadius: 2, bgcolor: `${cert.color}10`, border: `1px solid ${cert.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center", color: cert.color, flexShrink: 0,
                  }}>
                    {cert.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 600, color: "text.primary", fontSize: "0.92rem", lineHeight: 1.4 }}>
                      {cert.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 0.5 }}>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.8rem" }}>{cert.issuer}</Typography>
                      <Chip
                        label={cert.status}
                        size="small"
                        sx={{
                          bgcolor: cert.status === "Completed" ? "rgba(52,211,153,0.1)" : cert.status === "Enrolled" ? "rgba(0,212,200,0.1)" : "rgba(122,155,191,0.1)",
                          border: `1px solid ${cert.status === "Completed" ? "rgba(52,211,153,0.3)" : cert.status === "Enrolled" ? "rgba(0,212,200,0.3)" : "rgba(122,155,191,0.3)"}`,
                          color: cert.status === "Completed" ? "#34d399" : cert.status === "Enrolled" ? "#00d4c8" : "#7a9bbf",
                          fontSize: "0.65rem", fontWeight: 600,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ──────────────────────────────────────────────
// RESEARCH SECTION
// ──────────────────────────────────────────────
function ResearchSection({ sectionRef }) {
  return (
    <Box ref={sectionRef} id="research" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(7,24,41,0.7)", borderTop: "1px solid rgba(0,212,200,0.06)" }}>
      <Container maxWidth="lg">
        <SectionHeading title="Research & Publications" subtitle="Academic Work" />

        {RESEARCH.map((paper) => (
          <Card key={paper.title} sx={{ p: 0.5, border: `1px solid ${paper.color}20`, "&:hover": { border: `1px solid ${paper.color}45` } }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Grid container spacing={4} alignItems="flex-start">
                <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "center" } }}>
                  <Box sx={{
                    width: 56, height: 56, borderRadius: 2.5,
                    bgcolor: `${paper.color}12`, border: `1px solid ${paper.color}30`,
                    color: paper.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <MenuBook sx={{ fontSize: 26 }} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={11}>
                  <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", mb: 1.5, flexWrap: "wrap" }}>
                    <Chip
                      label={paper.type}
                      size="small"
                      sx={{ bgcolor: `${paper.color}10`, border: `1px solid ${paper.color}30`, color: paper.color, fontWeight: 600, fontSize: "0.65rem" }}
                    />
                    <Typography sx={{ fontSize: "0.78rem", color: "text.secondary" }}>{paper.year}</Typography>
                  </Box>

                  <Typography variant="h5" sx={{ mb: 0.75, lineHeight: 1.35, fontFamily: "'Playfair Display', serif", color: "text.primary" }}>
                    {paper.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.83rem", color: paper.color, fontWeight: 500, mb: 0.4 }}>
                    {paper.institution}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "text.secondary", mb: 2.5 }}>
                    Supervisor: {paper.supervisor}
                  </Typography>

                  <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", mb: 3 }}>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: paper.color, textTransform: "uppercase", letterSpacing: "0.14em", mb: 1 }}>
                      Abstract
                    </Typography>
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.9, fontSize: "0.9rem" }}>
                      {paper.abstract}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.14em", mb: 1.2 }}>
                      Keywords
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                      {paper.keywords.map((kw) => (
                        <Chip key={kw} label={kw} size="small" sx={{ bgcolor: `${paper.color}08`, border: `1px solid ${paper.color}20`, color: paper.color }} />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

// ──────────────────────────────────────────────
// CONTACT — updated to include all roles
// ──────────────────────────────────────────────
function ContactSection({ sectionRef }) {
  return (
    <Box ref={sectionRef} id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(7,24,41,0.7)", borderTop: "1px solid rgba(0,212,200,0.06)" }}>
      <Container maxWidth="md">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        {/* ── UPDATED: umbrella contact text ── */}
        <Typography sx={{ textAlign: "center", color: "text.secondary", lineHeight: 1.95, mb: 5, fontSize: "0.97rem" }}>
          Open to opportunities across{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
            Data Analytics, Business Intelligence, Analytics Engineering, AI Engineering, Data Science,
          </Box>{" "}
          and{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
            Machine Learning
          </Box>{" "}
          — in aviation, finance, tech, or any data-driven environment. Feel free to reach out for
          collaborations, project inquiries, or just a chat about data and AI!
        </Typography>

        <Box sx={{ display: "flex", gap: 2.5, justifyContent: "center", flexWrap: "wrap", mb: 5 }}>
          {[
            { icon: <Email sx={{ fontSize: 20 }} />, label: "Email", value: PERSONAL.email, color: "#00d4c8", href: `mailto:${PERSONAL.email}` },
            { icon: <Phone sx={{ fontSize: 20 }} />, label: "Phone", value: PERSONAL.phone, color: "#34d399", href: `tel:${PERSONAL.phone}` },
          ].map(({ icon, label, value, color, href }) => (
            <Box
              key={label}
              component="a"
              href={href}
              sx={{
                display: "flex", gap: 1.5, alignItems: "center",
                p: "14px 20px", borderRadius: 3,
                bgcolor: "background.paper", border: "1px solid rgba(0,212,200,0.1)",
                textDecoration: "none", color: "text.secondary",
                transition: "0.3s",
                "&:hover": { borderColor: color, color, transform: "translateY(-2px)" },
              }}
            >
              <Box sx={{ color, display: "flex" }}>{icon}</Box>
              <Box>
                <Typography sx={{ fontSize: "0.68rem", color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {label}
                </Typography>
                <Typography sx={{ fontSize: "0.88rem", color: "text.primary", fontWeight: 500 }}>
                  {value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ──────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────
function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: "center", borderTop: "1px solid rgba(0,212,200,0.07)" }}>
      <Typography color="text.secondary" sx={{ fontSize: "0.82rem" }}>
        © {new Date().getFullYear()} {PERSONAL.name}
      </Typography>
    </Box>
  );
}

// ──────────────────────────────────────────────
// APP — updated with WhatIDoSection
// ──────────────────────────────────────────────
function App() {
  const sections = {
    Home:     useRef(null),
    About:    useRef(null),
    Projects: useRef(null),
    Research: useRef(null),
    Skills:   useRef(null),
    Contact:  useRef(null),
  };

  const handleNav = (section) => {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
      `}</style>

      <NavBar onNav={handleNav} />

      <HeroSection     sectionRef={sections.Home} />
      {/* ── NEW: What I Do strip between Hero and About ── */}
      <WhatIDoSection />
      <AboutSection    sectionRef={sections.About} />
      <ProjectsSection sectionRef={sections.Projects} />
      <ResearchSection sectionRef={sections.Research} />
      <SkillsSection   sectionRef={sections.Skills} />
      <EducationSection />
      <ContactSection  sectionRef={sections.Contact} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;