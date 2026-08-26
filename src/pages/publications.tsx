import React from "react";
import Stack from "@mui/material/Stack";
import publicationsContent from "@/data/publicationsContent.json";
import Section from "@/components/Section";
import Publication from "@/components/Publication";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Order in which author-role groups (e.g. "Lead author" vs "Contributing
// author") should appear within a degree section, when a degree has more
// than one role represented.
const ROLE_ORDER = ["Lead author", "Contributing author"];

const publications = () => {
    const publicationsMap = publicationsContent.publications;

    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "center", // Center horizontally
                }}
                id="home"
            >
                <Section title="Publications" id="publications">
                    <Stack spacing={4}>
                        {Object.entries(publicationsMap).map(
                            ([degree, publicationsList]) => {
                                const roleGroups = ROLE_ORDER.map((role) => ({
                                    role,
                                    pubs: publicationsList.filter(
                                        (pub) => (pub.role ?? "Lead author") === role
                                    ),
                                })).filter((group) => group.pubs.length > 0);

                                // Only label sub-groups when a degree actually
                                // mixes roles; keep single-role sections plain.
                                const showRoleHeadings = roleGroups.length > 1;

                                return (
                                    <React.Fragment key={degree}>
                                        <Divider textAlign="center" sx={{ my: 2 }}>
                                            <Typography variant="h6" sx={{ px: 2 }}>
                                                {degree}
                                            </Typography>
                                        </Divider>

                                        {roleGroups.map(({ role, pubs }) => (
                                            <React.Fragment key={role}>
                                                {showRoleHeadings && (
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{ mt: 2 }}
                                                    >
                                                        {role}
                                                    </Typography>
                                                )}

                                                {pubs.map((pub, index) => (
                                                    <React.Fragment key={pub.doi}>
                                                        <Publication publication={pub} />

                                                        {index !== pubs.length - 1 && (
                                                            <Divider
                                                                orientation="horizontal"
                                                                flexItem
                                                                sx={{ borderRightWidth: 2, mb: 4 }}
                                                            />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                );
                            }
                        )}
                    </Stack>
                </Section>
            </Stack>
        </>
    );
};

export default publications;
