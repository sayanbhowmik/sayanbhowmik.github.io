
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Section from "@/components/Section";
import Introduction from "@/sections/Introduction";
import ResearchAreas from "@/sections/ResearchAreas";
import Quote from "@/sections/Quote";
import Contact from "@/sections/Contact";
import TopBanner from "@/components/TopBanner";

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
          <TopBanner image="banner3.jpg" height={600} />
          <Section title="Introduction" id="introduction">
            <Introduction />
          </Section>

          <Section title="Areas of Research" id="areas-of-research">
            <ResearchAreas />
          </Section>

          <Section title="" id="">
            <Quote />
          </Section>

          <Section title="" id="contact">
            <Contact />
          </Section>
        </Stack>
      </Box>
    </>
  );
}
