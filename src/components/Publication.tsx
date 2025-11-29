import React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface PublicationProps {
    publication: {
        title: string;
        authors: string;
        doi: string;
        link: string;
        image: string;
        abstract: string;
    };
}

const Publication = ({ publication }: PublicationProps) => {
    return (
        <>
            <Stack spacing={3}>
                {/* Title + authors row */}
                <Typography
                    component={Link}
                    href={publication.link}
                    sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                    variant="h5"
                >
                    {publication.title}
                </Typography>

                {/* Image floated left + abstract text wraps */}
                <Box>
                    <Box
                        component="img"
                        src={`/images/publications/${publication.image}`}
                        alt="Publication"
                        sx={{
                            width: 300,
                            height: "auto",
                            borderRadius: 2,
                            objectFit: "cover",

                            /* FLOAT behavior:
                             * - on md+ screens float left so paragraph wraps
                             * - on xs screens do not float (image sits above text)
                             */
                            float: { xs: "none", md: "left" },
                            mr: { xs: 0, md: 3 },
                            mb: { xs: 2, md: 0 },
                        }}
                    />
                    <Typography
                        variant="subtitle2"
                        sx={{
                            fontWeight: 500,
                            mt: 0,
                        }}
                    >
                        {`${publication.authors} | DOI: ${publication.doi}`}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            // ensure good readability when wrapped; allow it to flow under image naturally
                            mt: 1,
                            lineHeight: 1.6,
                        }}
                    >
                        {publication.abstract}
                    </Typography>
                    {/* clear so next publication (or footer) doesn't wrap around this image */}
                    <Box sx={{ clear: "both" }} />
                </Box>
            </Stack>
        </>
    );
};

export default Publication;
