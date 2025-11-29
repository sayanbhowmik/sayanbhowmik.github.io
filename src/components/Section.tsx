import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

interface SectionProps {
    // Define your prop types here, for example:
    title: string;
    id: string;
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
    const theme = useTheme();

    return (
        <>
            <Stack
                spacing={2}
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#d1e7eeff",
                    background: `linear-gradient(90deg, #d1e7eeff 30%, #aedeecff 90%)`,
                    padding: 2,
                }}
                id={id}
            >
                <Typography
                    variant="h5"
                    sx={{
                        paddingLeft: "0.9rem",
                        listStyleType: '"◈ "',
                        "& li": {
                            marginBottom: 1,
                            listStylePosition: "outside",
                        },
                    }}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        maxWidth: "900px",
                        width: "100%",
                        margin: "0 auto",
                        textAlign: "justify",
                    }}
                >
                    {children}
                </Box>
            </Stack>
        </>
    );
};

export default Section;
