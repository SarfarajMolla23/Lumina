import React from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./styles"; // Adjust styles according to your preference
import lumina3 from "../../images/lumina3.png";

const Navbar = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth?.user);

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(255, 255, 255, 0.9)", // Slightly transparent white background for Navbar
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        padding: "10px 20px",
        backdropFilter: "blur(10px)", // Blur effect for better blending with background
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Lumina Text and Image on the Left */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              className="lumina"
              variant="h4"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: "bold",
                color: "#ff77b3", // Light pink color for the text
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "10px 15px",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Soft shadow for the text
              }}
            >
              Lumina
            </Typography>
            <img
              className={classes.image}
              src={lumina3}
              alt="lumina3"
              height="60px"
              style={{
                marginLeft: "10px",
                borderRadius: "50%", // Circular image
                border: "2px solid #ffffff",
              }}
            />
          </Link>
        </div>

        {/* Sign In / Logout Button on the Right */}
        <div>
          {user ? (
            <div
              className={classes.profile}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
                sx={{
                  backgroundColor: "#ffe0eb", // Very light pink background for Avatar
                  marginRight: "10px",
                }}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography
                className={classes.userName}
                variant="h6"
                sx={{
                  marginRight: "10px",
                  fontWeight: "bold",
                  color: "#3c3c3c",
                }}
              >
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                sx={{
                  backgroundColor: "#ff77b3", // Light pink button color
                  color: "#ffffff", // White text for contrast
                  "&:hover": {
                    backgroundColor: "#ff99cc", // Lighter pink on hover
                  },
                  borderRadius: "5px", // Rounded button
                  padding: "8px 16px", // Padding for the button
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              sx={{
                backgroundColor: "#ff77b3", // Light pink button color
                color: "#ffffff", // White text for contrast
                "&:hover": {
                  backgroundColor: "#ff99cc", // Lighter pink on hover
                },
                borderRadius: "5px", // Rounded button
                padding: "8px 16px", // Padding for the button
              }}
            >
              Sign In
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
