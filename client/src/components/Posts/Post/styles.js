import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    position: "relative",
    borderRadius: "15px", // Slightly rounded corners
    background: "#fdfdfd", // Soft white background for a clean look
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for depth
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease", // Smooth transitions
    "&:hover": {
      transform: "translateY(-5px)", // More lift effect on hover
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)", // Deeper shadow on hover
      background: "#ffffff", // Change background to white on hover
    },
    width: "90%", // Smaller width
    maxWidth: "350px", // Set max width to keep it compact
    margin: "10px auto", // Center the card
    overflow: "hidden", // Prevent content overflow
    border: "1px solid #e0e0e0", // Light border for definition
  },
  media: {
    height: 200, // Shorter image area
    borderRadius: "15px 15px 0 0", // Round top corners
    filter: "brightness(85%)", // Slightly darkened image for focus
    transition: "filter 0.3s ease, transform 0.3s ease", // Smooth transitions
    "&:hover": {
      filter: "brightness(100%)", // Brighten image on hover
      transform: "scale(1.05)", // Slight zoom on hover
    },
  },
  overlay: {
    position: "absolute",
    top: "5px",
    left: "5px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark translucent background for text
    color: "#fff", // White text for contrast
    fontSize: "0.9rem", // Slightly smaller font
    padding: "5px 10px", // Adjusted padding
    borderRadius: "6px", // Rounded corners for overlay
    transition: "background-color 0.3s ease", // Smooth background transition
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker on hover
    },
  },
  overlay2: {
    position: "absolute",
    top: "5px",
    right: "5px",
    color: "white",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 10px", // Adjusted padding
    color: "#757575", // Muted gray for the details
    fontSize: "0.8rem", // Slightly smaller font size
  },
  title: {
    padding: "0 10px",
    fontWeight: "bold",
    color: "#333", // Darker text for contrast
    fontSize: "1.2rem", // Smaller font size
    marginBottom: "8px",
    transition: "color 0.3s ease", // Smooth color transition
    "&:hover": {
      color: "#1976d2", // Change to a vibrant blue on hover
    },
  },
  cardContent: {
    padding: "10px", // Adjusted padding for content
    color: "#333", // Darker text color for content
    fontSize: "0.9rem", // Readable font size
    lineHeight: 1.5, // Increased line height for readability
  },
  cardActions: {
    padding: "8px 10px",
    display: "flex",
    justifyContent: "space-between",
    background: "#fafafa", // Lighter background for contrast with card
    borderTop: "1px solid #ddd", // Light border to separate actions
    transition: "background-color 0.3s ease", // Smooth background transition
    "&:hover": {
      background: "#f0f0f0", // Change background on hover
    },
  },
  button: {
    fontSize: "0.8rem",
    color: "#1976d2", // Vibrant blue for the buttons
    padding: "8px 14px", // Adjusted padding for better touch area
    borderRadius: "10px", // Round button corners
    backgroundColor: "#fff", // White background for buttons
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for buttons
    transition: "all 0.3s ease", // Smooth transition for buttons
    "&:hover": {
      backgroundColor: "#1976d2", // Blue background on hover
      color: "#fff", // White text on hover
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)", // Deeper shadow on hover
    },
  },
}));
