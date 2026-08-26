import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import publicationsContent from "@/data/publicationsContent.json";

interface RelatedPublicationsProps {
    dois: string[];
}

// Every publication, regardless of degree, indexed by DOI for lookup.
const allPublications = Object.values(publicationsContent.publications).flat();

const RelatedPublications = ({ dois }: RelatedPublicationsProps) => {
    const publications = dois
        .map((doi) => allPublications.find((pub) => pub.doi === doi))
        .filter((pub): pub is (typeof allPublications)[number] => Boolean(pub));

    if (publications.length === 0) {
        return null;
    }

    return (
        <Stack spacing={2} sx={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
            <Typography variant="subtitle1">Related Publications</Typography>
            <Grid container spacing={2}>
                {publications.map((pub) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={pub.doi}>
                        <Card
                            component="a"
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "block",
                                height: "100%",
                                textDecoration: "none",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={`/images/publications/${pub.image}`}
                                alt={pub.title}
                                sx={{ height: 140, objectFit: "cover" }}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {pub.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default RelatedPublications;
