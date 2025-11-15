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
            main: "#204f5e", // Your custom color
        },
        secondary: {
            main: "#dc004e",
        },
    },
    typography: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        subtitle2: {
            fontWeight: 300, // Bold (you can use a number or string like 'bold')
        },
        h5: {
            fontWeight: 400, // Bold (you can use a number or string like 'bold')
        },
        allVariants: {
            color: "#204f5e",
        },
    },
});

export default theme;
