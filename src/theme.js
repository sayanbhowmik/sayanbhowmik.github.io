import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "16px", // Set the global border radius for all cards
                    padding: "5px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // soft subtle shadow
                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    borderRadius: "10px", // Apply border radius to the media (image/video)
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                },
            },
        },
    },

    palette: {
        primary: {
            main: "#a3492f", // Terracotta
        },
        secondary: {
            main: "#c98a2c", // Warm ochre
        },
        background: {
            default: "#faf6f0", // Warm ivory
        },
    },
    typography: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        subtitle2: {
            fontWeight: "bold", // Bold (you can use a number or string like 'bold')
            fontStyle: "italic",
            color: "#a3492f"
        },
        subtitle1: {
            fontWeight: 600, // Bold (you can use a number or string like 'bold')
            textTransform: "uppercase",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.5rem",
            textTransform: "small-caps",
            fontFamily: '"Georgia", "Times New Roman", serif',
        },
        h5: {
            fontWeight: 500, // Bold (you can use a number or string like 'bold')
            color: "#4a2f1f",
        },
        allVariants: {
            color: "#3a2a20",
        },
    },
});

export default theme;
