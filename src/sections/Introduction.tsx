import React from 'react'
import Typography from "@mui/material/Typography";
import pageContent from "@/data/pageContent.json";
import Stack from "@mui/material/Stack";
import CircularImage from '@/components/CircularImage';
import Divider from "@mui/material/Divider";

const Introduction = () => {
    return (
        <>
            <Stack spacing={4} direction={"row"}>
                <CircularImage
                    src={`/images/${pageContent.introduction.image}`}
                    alt="Profile Picture"
                    size={250}
                    border="4px solid #041220ff"
                />
                <Typography
                    variant="body1"
                    sx={{
                        paddingLeft: "0.9rem"
                    }}
                >
                    {pageContent.introduction.content}
                </Typography>
            </Stack>
        </>
    )
}

export default Introduction
