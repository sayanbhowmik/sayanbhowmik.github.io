import Stack from '@mui/material/Stack';
import React from 'react'
import CircularImage from './CircularImage';
import Typography from "@mui/material/Typography";

interface ResearchAreaProps {
    area: {
        title: string;
        image: string;
    };
}

const ResearchArea = ({ area }: ResearchAreaProps) => {
    return (
        <>
            <Stack spacing={2} alignItems="center">
                <CircularImage
                    src={`/images/researchAreas/${area.image}`}
                    alt={area.title}
                    size={200}
                    border="4px solid #041220ff"
                />
                <Typography
                    variant="button"
                >
                    {area.title}
                </Typography>
            </Stack>
        </>
    )
}

export default ResearchArea
