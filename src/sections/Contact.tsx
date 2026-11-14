import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import pageContent from "@/data/pageContent.json";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

const iconMap: Record<string, React.ReactNode> = {
    email: <EmailIcon fontSize="small" />,
    phone: <PhoneIcon fontSize="small" />,
    address: <LocationOnIcon fontSize="small" />,
    linkedin: <LinkedInIcon fontSize="small" />,
};

const labelMap: Record<string, string> = {
    email: "Email",
    phone: "Phone",
    address: "Address",
    linkedin: "LinkedIn",
};

// Values that should render as clickable links rather than plain text.
const hrefFor = (key: string, value: string): string | undefined => {
    if (key === "email") return `mailto:${value}`;
    if (key === "linkedin") return value;
    return undefined;
};

// Show the LinkedIn handle instead of the full URL.
const displayFor = (key: string, value: string): string =>
    key === "linkedin" ? value.replace(/\/$/, "").split("/").pop() ?? value : value;

const Contact = () => {
    const contactInfo = pageContent.contact.info;

    // Phone and address are placeholders for now, so remove this filter
    // once pageContent.json's contact.info has real values for them.
    const visibleContactKeys = ["email", "linkedin"];

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
                        width: "100%",
                        maxWidth: 300,
                        height: "auto",
                        borderRadius: 2,
                    }}
                />
                <Stack spacing={1} alignItems={"center"}>
                    {Object.entries(contactInfo)
                        .filter(([key]) => visibleContactKeys.includes(key))
                        .map(([key, value]) => (
                        <Stack
                            key={key}
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ marginBottom: 1 }}
                        >
                            {iconMap[key]}
                            <Typography variant="body1">
                                <strong>{labelMap[key] ?? key}:</strong>{" "}
                                {hrefFor(key, value) ? (
                                    <Link
                                        href={hrefFor(key, value)}
                                        target={key === "linkedin" ? "_blank" : undefined}
                                        rel={key === "linkedin" ? "noopener noreferrer" : undefined}
                                    >
                                        {displayFor(key, value)}
                                    </Link>
                                ) : (
                                    value
                                )}
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
