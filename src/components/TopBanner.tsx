import Box from "@mui/material/Box";
import React from "react";

interface TopBannerProps {
    image: string;
    // Natural width/height of the image, e.g. "1920 / 576". Sizing the
    // container to the image's own aspect ratio means "cover" fills it
    // exactly, with no cropping and no letterboxing.
    aspectRatio?: string;
}

const TopBanner = ({ image, aspectRatio = "1920 / 576" }: TopBannerProps) => {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio,
                    background: "linear-gradient(90deg, #f6e8d8ff 30%, #eecfa0ff 90%)",
                    overflow: "hidden",
                }}
            >
                <Box
                    component="img"
                    src={`/images/${image}`}
                    alt="Banner"
                    sx={{
                        inset: 0,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
            </Box>
        </>
    );
};

export default TopBanner;
