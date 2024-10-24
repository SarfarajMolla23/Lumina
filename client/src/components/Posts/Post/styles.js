import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    position: "relative",
    borderRadius: "20px", // Smooth round corners
    background: "linear-gradient(135deg, #f3ec78, #af4261)", // Soft gradient background
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Softer shadow for depth
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)", // Slight lift effect on hover
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)", // Deeper shadow on hover
    },
    width: "100%",
    maxWidth: "400px", // Wider on larger screens
    margin: "20px auto", // Center the card
    overflow: "hidden", // Prevent content overflow
    
  },
  media: {
    height: 250, // Taller image area
    borderRadius: "20px 20px 0 0", // Round top corners
    filter: "brightness(90%)", // Slightly darkened image
    transition: "filter 0.3s ease",
    "&:hover": {
      filter: "brightness(100%)", // Brighten image on hover
    },
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark translucent background for text
    color: "#fff", // White text for contrast
    fontSize: "1rem", // Slightly larger font
    padding: "8px 12px", // Add padding
    borderRadius: "8px", // Rounded corners for overlay
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px", // Adjusted padding
    color: "#757575", // Muted gray for the details
    fontSize: "0.9rem", // Slightly smaller font size
  },
  title: {
    padding: "0 15px",
    fontWeight: "bold",
    color: "#fff", // White text for contrast on dark background
    fontSize: "1.4rem", // Larger font size
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", // Soft text shadow
    marginBottom: "10px",
  },
  cardContent: {
    padding: "15px", // Adjusted padding for content
    color: "#333", // Darker text color for content
    fontSize: "1rem", // Readable font size
    lineHeight: 1.6, // Increased line height for readability
  },
  cardActions: {
    padding: "10px 15px",
    display: "flex",
    justifyContent: "space-between",
    background: "#fafafa", // Light background for contrast with card
    borderTop: "1px solid #eee", // Light border to separate actions
  },
  button: {
    fontSize: "0.9rem",
    color: "#1976d2", // Vibrant blue for the buttons
    padding: "8px 16px", // Increased padding for better touch area
    borderRadius: "12px", // Round button corners
    backgroundColor: "#fff", // White background for buttons
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for buttons
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1976d2", // Blue background on hover
      color: "#fff", // White text on hover
    },
  },
}));
