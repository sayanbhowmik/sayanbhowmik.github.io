import React from "react";
import Stack from "@mui/material/Stack";
import pageContent from "@/data/pageContent.json";
import ResearchAreaSection from "@/sections/ResearchAreaSection";

const Research = () => {
    const areas = pageContent.researchAreas.areas;

    return (
        <Stack
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}
            id="research"
        >
            {areas.map((area) => (
                <ResearchAreaSection key={area.id} area={area} />
            ))}
        </Stack>
    );
};

export default Research;
