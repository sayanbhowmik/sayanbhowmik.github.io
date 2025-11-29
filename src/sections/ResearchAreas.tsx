import React from "react";
import Grid from "@mui/material/Grid";
import pageContent from "@/data/pageContent.json";
import ResearchArea from "@/components/ResearchArea";

const ResearchAreas = () => {
  const researchAreas = pageContent.researchAreas.areas;
  const totalAreas = researchAreas.length;

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "100%" }}
        justifyContent={totalAreas % 3 == 2 ? "space-evenly" : "space-between"}
      >
        {researchAreas.map((area, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <ResearchArea area={area} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ResearchAreas;
