import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InlineMarkdown from "@/components/InlineMarkdown";

interface WorkshopSectionProps {
    workshop: {
        id: string;
        title: string;
        role?: string;
        paragraphs: string[];
        images?: string[];
    };
}

const WorkshopSection: React.FC<WorkshopSectionProps> = ({ workshop }) => {
    return (
        <Stack spacing={2} id={workshop.id} sx={{ scrollMarginTop: "90px" }}>
            <Stack spacing={0.5}>
                <Typography variant="h5">{workshop.title}</Typography>
                {workshop.role && (
                    <Typography variant="subtitle2">{workshop.role}</Typography>
                )}
            </Stack>

            {workshop.paragraphs.map((paragraph, index) => (
                <Typography key={index} variant="body1">
                    <InlineMarkdown text={paragraph} />
                </Typography>
            ))}

            {workshop.images && workshop.images.length > 0 && (
                <Grid container spacing={2}>
                    {workshop.images.map((image, index) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={index}>
                            <Box
                                component="img"
                                src={image}
                                alt={`${workshop.title} photo ${index + 1}`}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 2,
                                    display: "block",
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Stack>
    );
};

export default WorkshopSection;
