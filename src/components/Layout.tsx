import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
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
        </Box>
    );
}
