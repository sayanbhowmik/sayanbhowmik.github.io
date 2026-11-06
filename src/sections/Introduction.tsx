import React from 'react'
import Typography from "@mui/material/Typography";
import pageContent from "@/data/pageContent.json";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularImage from '@/components/CircularImage';

const Introduction = () => {
    return (
        <>
            <Stack spacing={4} direction={{
                xs: "column",   // phones → vertical
                sm: "column",   // phones (landscape) / small tablets → still vertical;
                                // side-by-side needs more width than this to breathe
                md: "row",      // desktop → horizontal
            }} alignItems={{ xs: "center", sm: "center", md: "flex-start" }}>
                <Stack spacing={1.5} alignItems="center" sx={{ flexShrink: 0, maxWidth: 260 }}>
                    <CircularImage
                        src={`/images/${pageContent.introduction.image}`}
                        alt="Profile Picture"
                        size={250}
                        border="4px solid #3a2a20"
                    />
                    <Stack alignItems="center">
                        {pageContent.introduction.position.map((line, index) => (
                            <Typography
                                key={index}
                                variant="body2"
                                sx={{ textAlign: "center", fontWeight: index === 0 ? 600 : 400 }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
                <Stack spacing={2} sx={{ paddingLeft: "0.9rem" }}>
                    {pageContent.introduction.content.map((paragraph, index) => (
                        <Typography key={index} variant="body1">
                            {paragraph}
                        </Typography>
                    ))}
                    <Button
                        variant="outlined"
                        color="primary"
                        href="/CV/My_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ alignSelf: "flex-start" }}
                    >
                        Download CV
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Introduction
