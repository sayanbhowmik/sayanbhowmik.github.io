import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import pageContent from "@/data/pageContent.json";

const Awards = () => {
    const awards = pageContent.awards;

    return (
        <List sx={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
            {awards.map((award, index) => (
                <ListItem key={index} alignItems="flex-start" disableGutters>
                    <ListItemIcon sx={{ minWidth: "40px", color: "#a3492f" }}>
                        <EmojiEventsIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant="body1">
                                <strong>{award.title}</strong>, {award.org} ({award.year})
                            </Typography>
                        }
                        secondary={award.description}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default Awards;
