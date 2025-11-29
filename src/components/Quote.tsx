import Stack from "@mui/material/Stack";
import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface QuoteProps {
    quote: string;
    author: string;
}

const Quote = ({ quote, author }: QuoteProps) => {
    return (
        <>
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ borderRightWidth: 2, marginY: 4 }}
            />

            <Stack spacing={2} textAlign="center" alignItems="center">
                <Typography
                    variant="h2"
                    sx={{
                        maxWidth: "300px",
                        width: "100%",
                    }}
                >
                    {`"${quote}"`}
                </Typography>

                <Typography variant="button">{`- ${author}`}</Typography>
            </Stack>
        </>
    );
};

export default Quote;
