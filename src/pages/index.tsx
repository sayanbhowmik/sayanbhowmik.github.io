
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Section from "@/components/Section";
import Introduction from "@/sections/Introduction";

export default function Home() {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Box component="main" >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
          }}
          id="home"
        >

          <Section title="Introduction" id="introduction">
            <Introduction />
          </Section>
        </Stack>
      </Box>
    </>
  );
}
