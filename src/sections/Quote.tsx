import Stack from "@mui/material/Stack";
import React from "react";
import pageContent from "@/data/pageContent.json";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Quote = () => {
    return (
        <>
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ borderRightWidth: 2, marginY: 4 }}
            />
            <Stack spacing={2} textAlign={"center"} alignItems="center" >
                <Typography variant="h2" sx={{
                    maxWidth: "300px",
                    width: "100%"
                }}>
                    {`"${pageContent.quote.text}"`}
                </Typography>
                <Typography variant="button">{`- ${pageContent.quote.author}`}</Typography>
            </Stack>
        </>
    );
};

export default Quote;
