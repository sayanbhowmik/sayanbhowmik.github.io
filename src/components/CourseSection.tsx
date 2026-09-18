import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import InlineMarkdown from "@/components/InlineMarkdown";

interface Lecture {
    title: string;
    url: string;
}

interface Slide {
    label: string;
    path: string;
}

interface CourseSectionProps {
    course: {
        id: string;
        title: string;
        role?: string;
        paragraphs: string[];
        testimonials?: string[];
        lectures?: Lecture[];
        slides?: Slide[];
    };
}

const CourseSection: React.FC<CourseSectionProps> = ({ course }) => {
    return (
        <Stack spacing={2} id={course.id} sx={{ scrollMarginTop: "90px" }}>
            <Stack spacing={0.5}>
                <Typography variant="h5">{course.title}</Typography>
                {course.role && (
                    <Typography variant="subtitle2">{course.role}</Typography>
                )}
            </Stack>

            {course.paragraphs.map((paragraph, index) => (
                <Typography key={index} variant="body1">
                    <InlineMarkdown text={paragraph} />
                </Typography>
            ))}

            {course.testimonials && (
                <List sx={{ listStyleType: "disc", pl: 3, py: 0 }}>
                    {course.testimonials.map((quote, index) => (
                        <ListItem
                            key={index}
                            disableGutters
                            sx={{ display: "list-item", py: 0.5 }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ fontStyle: "italic" }}
                            >
                                &ldquo;{quote}&rdquo;
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            )}

            {course.lectures && (
                <Stack spacing={1}>
                    <Typography variant="subtitle1">Lectures</Typography>
                    <List sx={{ listStyleType: "decimal", pl: 3, py: 0 }}>
                        {course.lectures.map((lecture, index) => (
                            <ListItem
                                key={index}
                                disableGutters
                                sx={{ display: "list-item", py: 0.5 }}
                            >
                                <Link
                                    href={lecture.url}
                                    color="primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {lecture.title}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            )}

            {course.slides && (
                <Stack spacing={1}>
                    <Typography variant="subtitle1">Slides</Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {course.slides.map((slide, index) => (
                            <Button
                                key={index}
                                component="a"
                                href={slide.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                size="small"
                            >
                                {slide.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
};

export default CourseSection;
