import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: '64px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: "8px",
    },
  },
  avatar: {
    margin:"8px",
    backgroundColor: "#f50057",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "24px",
  },
  submit: {
    margin: "20px 0 20px",
  },
  googleButton: {
    marginBottom: "16px",
  },
}));
