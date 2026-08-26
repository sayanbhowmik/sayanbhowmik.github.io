
import Stack from "@mui/material/Stack";
import Section from "@/components/Section";
import Introduction from "@/sections/Introduction";
import ResearchAreas from "@/sections/ResearchAreas";
import Awards from "@/sections/Awards";
import TopBanner from "@/components/TopBanner";
import pageContent from "@/data/pageContent.json";

export default function Home() {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          width: "100%",        // add this
          overflow: "hidden",   // add this
        }}
        id="home"
      >
        <TopBanner image={pageContent.banner.image} />
        <Section title="Introduction" id="introduction">
          <Introduction />
        </Section>

        <Section title="Areas of Research" id="areas-of-research">
          <ResearchAreas />
        </Section>

        <Section title="Awards" id="awards">
          <Awards />
        </Section>
      </Stack>
    </>
  );
}
