import React from 'react'
import Typography from "@mui/material/Typography";
import pageContent from "@/data/pageContent.json";

const Introduction = () => {
    return (
        <>
            <Typography
                variant="body1"
                sx={{
                    paddingLeft: "0.9rem",
                    listStyleType: '"◈ "',
                    "& li": {
                        marginBottom: 1,
                        listStylePosition: "outside",
                    },
                }}
            >
                {pageContent.introduction.content}
            </Typography>
        </>
    )
}

export default Introduction
