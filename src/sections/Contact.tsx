import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import pageContent from "@/data/pageContent.json";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const iconMap: Record<string, React.ReactNode> = {
    email: <EmailIcon fontSize="small" />,
    phone: <PhoneIcon fontSize="small" />,
    address: <LocationOnIcon fontSize="small" />,
};

const Contact = () => {
    const contactInfo = pageContent.contact.info;

    return (
        <>
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ borderRightWidth: 2, mb: 4 }}
            />
            <Stack spacing={2} alignItems="center" justifyContent={"center"}>
                <Box
                    component="img"
                    src={`/images/${pageContent.contact.logo}`}
                    alt="GA Tech Logo"
                    sx={{
                        width: 300,
                        height: "auto",
                        borderRadius: 2,
                    }}
                />
                <Stack spacing={1} alignItems={"center"}>
                    {Object.entries(contactInfo).map(([key, value]) => (
                        <Stack
                            key={key}
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ marginBottom: 1 }}
                        >
                            {iconMap[key]}
                            <Typography variant="body1">
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            <Divider
                orientation="horizontal"
                flexItem
                sx={{ borderRightWidth: 2, marginY: 4 }}
            />
        </>
    );
};

export default Contact;
