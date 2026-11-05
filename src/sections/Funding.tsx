import React from "react";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MemoryIcon from "@mui/icons-material/Memory";
import pageContent from "@/data/pageContent.json";

const Funding = () => {
    const funding = pageContent.funding;
    // Group entries by the institution where they were received, preserving order.
    const institutions = [...new Set(funding.map((item) => item.institution))];

    return (
        <Stack spacing={4}>
            {institutions.map((institution) => (
                <Stack key={institution} spacing={1}>
                    <Typography variant="h5">{institution}</Typography>
                    <List disablePadding>
                        {funding
                            .filter((item) => item.institution === institution)
                            .map((item, index) => (
                                <ListItem key={index} alignItems="flex-start" disableGutters>
                                    <ListItemIcon sx={{ minWidth: "40px", color: "#a3492f" }}>
                                        <MemoryIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body1">
                                                <strong>{item.program}</strong> ({item.role}), {item.amount} ({item.years})
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" sx={{ textAlign: "left" }}>
                                                {item.title}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                    </List>
                </Stack>
            ))}
        </Stack>
    );
};

export default Funding;
