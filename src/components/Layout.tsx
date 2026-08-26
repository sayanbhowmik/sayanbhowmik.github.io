import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Section from "@/components/Section";
import Contact from "@/sections/Contact";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <Navbar />
            <Toolbar />
            <Box component="main">{children}</Box>
            <Section title="" id="contact">
                <Contact />
            </Section>
            <Typography
                variant="caption"
                sx={{
                    display: "block",
                    textAlign: "center",
                    color: "#8a7a6d",
                    paddingBottom: 2,
                }}
            >
                This website was initially designed by my good friend Anuran Chakraborty and upgraded using Claude Code.
            </Typography>
        </Box>
    );
}
