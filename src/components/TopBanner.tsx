import Box from "@mui/material/Box";
import React from "react";

interface TopBannerProps {
    image: string;
    height: string | number;
}

const TopBanner = (props: TopBannerProps) => {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: props.height,
                    background: "linear-gradient(90deg, #d1e7eeff 30%, #aedeecff 90%)",
                    overflow: "hidden",
                }}
            >
                <Box
                    component="img"
                    src={`/images/${props.image}`}
                    alt="Banner"
                    sx={{
                        inset: 0,
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />

                {/* Bottom Gradient Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: "50%", // control fade height
                        background: "linear-gradient(to top, #b5e3f1ff 0%, transparent 100%)",
                    }}
                />
            </Box>
        </>
    );
};

export default TopBanner;
