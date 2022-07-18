import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
const NavBar = ({ isHomePage }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
    >
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
            {isHomePage ? (
              <>
                <Link to="/" style={{ textDecoration: "none" }}>
                  {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Movies
                  </Button>
                </Link>

                {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
                <Link to="/logout" style={{ textDecoration: "none" }}>
                  {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    LogOut
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <LocalMoviesIcon sx={{ width: 40, mt: 0.3 }} />
                <Typography variant="h5">Movieku</Typography>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;