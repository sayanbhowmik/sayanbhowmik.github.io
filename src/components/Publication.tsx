import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "next/link";
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
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ borderRightWidth: 2, mb: 4 }}
            />
            <Stack spacing={2}>
                <Typography
                    component={Link}
                    href={publication.link}
                    sx={{
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                    variant="h5"
                >
                    {publication.title}
                </Typography>

                <Typography variant="h6">
                    {`${publication.authors} | DOI: ${publication.doi}`}
                </Typography>

                <Typography variant="body1">{publication.abstract}</Typography>
            </Stack>
        </>
    );
};

export default Publication;
