import React from "react";
import Stack from "@mui/material/Stack";
import TopBanner from "@/components/TopBanner";
import publicationsContent from "@/data/publicationsContent.json";
import Section from "@/components/Section";
import Publication from "@/components/Publication";

const publications = () => {
    const publicationsList = publicationsContent.publications;

    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "center", // Center horizontally
                }}
                id="home"
            >
                <TopBanner
                    image={`publications/${publicationsContent.bannerImagePath}`}
                    height={600}
                />
                <Section title="Publications" id="publications">
                    <Stack spacing={4}>
                        {publicationsList.map((pub, index) => (
                            <Publication key={index} publication={pub} />
                        ))}
                    </Stack>
                </Section>
            </Stack>
        </>
    );
};

export default publications;
