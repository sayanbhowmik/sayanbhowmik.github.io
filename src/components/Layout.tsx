import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <Navbar />
            <Toolbar />
            <Box component="main">{children}</Box>
        </Box>
    );
}
