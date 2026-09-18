import React from "react";
import Link from "@mui/material/Link";

interface InlineMarkdownProps {
    text: string;
}

// Renders a plain string that may contain markdown-style [label](url) links,
// which is how course/workshop copy is authored in the source .ipynb files.
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const InlineMarkdown: React.FC<InlineMarkdownProps> = ({ text }) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let key = 0;

    LINK_PATTERN.lastIndex = 0;
    while ((match = LINK_PATTERN.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        const [, label, href] = match;
        const isExternal = /^https?:\/\//.test(href);
        parts.push(
            <Link
                key={key++}
                href={href}
                color="primary"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
            >
                {label}
            </Link>
        );
        lastIndex = LINK_PATTERN.lastIndex;
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return <>{parts}</>;
};

export default InlineMarkdown;
