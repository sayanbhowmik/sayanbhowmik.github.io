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
                style={{ backgroundColor: "#ffffffff", boxShadow: "none", paddingLeft: 100 }}
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
                        style={{
                            color: "#1f5a75ff",
                            minWidth: "200px",
                            fontFamily: "Kaushan Script, cursive",
                            fontWeight: "bold"
                        }}
                    >
                        Sayan Bhowmik
                    </Typography>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                            {navMenu.map((label, index) => (
                                <Button key={index} color="primary" href={`${label.path}`}>
                                    {label.name}
                                </Button>
                            ))}
                        </div>
                    )}

                    {/* Mobile Menu Icon */}
                    {isMobile && (
                        <IconButton
                            sx={{ color: "#1f5a75ff" }}
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
