import Stack from '@mui/material/Stack';
import React from 'react'
import NextLink from 'next/link';
import CircularImage from './CircularImage';
import Typography from "@mui/material/Typography";

interface ResearchAreaProps {
    area: {
        id: string;
        title: string;
        image: string;
    };
}

const ResearchArea = ({ area }: ResearchAreaProps) => {
    return (
        <NextLink
            href={`/research/#${area.id}`}
            style={{ textDecoration: "none" }}
        >
            <Stack
                spacing={2}
                alignItems="center"
                sx={{
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                        transform: "translateY(-4px)",
                    },
                    "&:hover .research-area-title": {
                        textDecoration: "underline",
                    },
                }}
            >
                <CircularImage
                    src={`/images/researchAreas/${area.image}`}
                    alt={area.title}
                    size={200}
                    border="4px solid #3a2a20"
                />
                <Typography
                    variant="button"
                    className="research-area-title"
                >
                    {area.title}
                </Typography>
            </Stack>
        </NextLink>
    )
}

export default ResearchArea
