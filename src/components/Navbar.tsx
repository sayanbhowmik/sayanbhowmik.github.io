import React from "react";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import navbarContent from "@/data/navbarContent.json";

interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navMenu = navbarContent.items;

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#faf6f0",
                    boxShadow: "none",
                    // The generous left gutter is a desktop-only flourish;
                    // on narrow screens it was eating into the space the
                    // logo and menu icon need, so it only kicks in at md+.
                    paddingLeft: { xs: 0, md: "100px" },
                }}
            >
                <Toolbar
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component="a"
                        href="/#home"
                        sx={{
                            color: "#a3492f",
                            minWidth: { xs: "auto", sm: "200px" },
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontWeight: 700,
                            fontSize: { xs: "1.15rem", sm: "1.5rem", md: "1.75rem" },
                            textDecoration: "none",
                        }}
                    >
                        Sayan Bhowmik
                    </Typography>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                            {navMenu.map((label, index) => (
                                <Button
                                    key={index}
                                    color="primary"
                                    href={`${label.path}`}
                                    sx={{ fontSize: "1.05rem" }}
                                >
                                    {label.name}
                                </Button>
                            ))}
                        </div>
                    )}

                    {/* Mobile Menu Icon */}
                    {isMobile && (
                        <IconButton
                            sx={{ color: "#a3492f" }}
                            onClick={handleMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Mobile Menu Drawer */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {navMenu.map((label) => (
                            <MenuItem
                                key={label.name}
                                onClick={handleMenuClose}
                                component="a"
                                href={`${label.path}`}
                                sx={{ fontSize: "1.05rem" }}
                            >
                                {label.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
