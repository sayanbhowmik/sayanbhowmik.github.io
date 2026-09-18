import React, { useState, SyntheticEvent } from "react";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import Section from "@/components/Section";
import CourseSection from "@/components/CourseSection";
import WorkshopSection from "@/components/WorkshopSection";
import teachingContent from "@/data/teachingContent.json";

const Teaching = () => {
    const [tab, setTab] = useState(0);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <Section title="Teaching" id="teaching">
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
                <Tab label="Courses" />
                <Tab label="Workshops" />
            </Tabs>

            {tab === 0 && (
                <Stack spacing={5} divider={<Divider flexItem />}>
                    {teachingContent.courses.map((course) => (
                        <CourseSection key={course.id} course={course} />
                    ))}
                </Stack>
            )}

            {tab === 1 && (
                <Stack spacing={5} divider={<Divider flexItem />}>
                    {teachingContent.workshops.map((workshop) => (
                        <WorkshopSection key={workshop.id} workshop={workshop} />
                    ))}
                </Stack>
            )}
        </Section>
    );
};

export default Teaching;
