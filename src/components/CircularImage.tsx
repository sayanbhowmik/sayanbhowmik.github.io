import React from "react";
import Box from "@mui/material/Box";

interface CircularImageProps {
    src: string;
    alt?: string;
    size?: number | string;   // e.g., 120 or "150px"
    border?: string;          // optional, e.g., "3px solid #1976d2"
}

const CircularImage: React.FC<CircularImageProps> = ({
    src,
    alt = "",
    size = 120,
    border = "none",
}) => {
    return (
        <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
                width: size,
                height: size,
                borderRadius: "50%",
                objectFit: "cover",
                border,
                display: "block",
            }}
        />
    );
};

export default CircularImage;
