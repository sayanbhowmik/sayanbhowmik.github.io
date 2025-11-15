
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Box component="main" >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
          }}
          id="home"
        >
          <h1 className="hidden">Sayan Bhowmik Portfolio</h1>
        </Stack>
      </Box>
    </>
  );
}
