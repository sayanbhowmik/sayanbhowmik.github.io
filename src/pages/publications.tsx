import React from "react";
import Stack from "@mui/material/Stack";
import TopBanner from "@/components/TopBanner";
import publicationsContent from "@/data/publicationsContent.json";
import Section from "@/components/Section";
import Publication from "@/components/Publication";
import Quote from "@/components/Quote";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const publications = () => {
    const publicationsMap = publicationsContent.publications;

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
                        {Object.entries(publicationsMap).map(
                            ([degree, publicationsList]) => (
                                <>
                                    <Divider textAlign="center" sx={{ my: 2 }}>
                                        <Typography variant="h6" sx={{ px: 2 }}>
                                            {degree}
                                        </Typography>
                                    </Divider>

                                    {publicationsList.map((pub, index) => (
                                        <>
                                            <Publication publication={pub} />

                                            {index !== publicationsList.length - 1 && (
                                                <Divider
                                                    orientation="horizontal"
                                                    flexItem
                                                    sx={{ borderRightWidth: 2, mb: 4 }}
                                                />
                                            )}
                                        </>
                                    ))}
                                </>
                            )
                        )}
                    </Stack>
                </Section>

                <Section title="" id="">
                    <Quote
                        quote={publicationsContent.quote.text}
                        author={publicationsContent.quote.author}
                    />
                </Section>
            </Stack>
        </>
    );
};

export default publications;
