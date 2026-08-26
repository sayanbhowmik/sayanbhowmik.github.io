import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "@/components/Section";
import CircularImage from "@/components/CircularImage";
import RelatedPublications from "@/components/RelatedPublications";

interface ResearchAreaSectionProps {
    area: {
        id: string;
        title: string;
        image: string;
        description: string;
        relatedPublicationDois: string[];
    };
}

const ResearchAreaSection = ({ area }: ResearchAreaSectionProps) => {
    return (
        <Section title={area.title} id={area.id}>
            <Stack spacing={3} alignItems="center">
                <CircularImage
                    src={`/images/researchAreas/${area.image}`}
                    alt={area.title}
                    size={140}
                    border="4px solid #3a2a20"
                />
                <Typography variant="body1" sx={{ maxWidth: "800px" }}>
                    {area.description}
                </Typography>
                <RelatedPublications dois={area.relatedPublicationDois} />
            </Stack>
        </Section>
    );
};

export default ResearchAreaSection;
