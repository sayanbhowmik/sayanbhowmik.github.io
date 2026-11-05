import React, { useState, SyntheticEvent } from "react";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import Section from "@/components/Section";
import ResearchAreaSection from "@/sections/ResearchAreaSection";
import Funding from "@/sections/Funding";
import pageContent from "@/data/pageContent.json";

const Research = () => {
    const [tab, setTab] = useState(0);
    const areas = pageContent.researchAreas.areas;

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <Section title="Research" id="research">
            <Tabs
                value={tab}
                onChange={handleChange}
                variant="fullWidth"
                sx={{
                    mb: 4,
                    minHeight: 0,
                    "& .MuiTab-root": { fontSize: "1rem", minHeight: 0, py: 1.5 },
                }}
            >
                <Tab label="Research Thrusts" />
                <Tab label="Funding" />
            </Tabs>

            {tab === 0 && (
                <Stack spacing={5} divider={<Divider flexItem />}>
                    {areas.map((area) => (
                        <ResearchAreaSection key={area.id} area={area} />
                    ))}
                </Stack>
            )}

            {tab === 1 && <Funding />}
        </Section>
    );
};

export default Research;
