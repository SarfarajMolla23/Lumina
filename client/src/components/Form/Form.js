import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper
      className={classes.paper}
      sx={{
        background: "linear-gradient(135deg, #d1c4e9 0%, #fff9c4 100%)",
        minHeight: {
          xs: "40vh", // Minimum height for extra small devices
          sm: "45vh", // Increased height for small devices
          md: "60vh", // Adjusted for medium devices
          lg: "60vh", // Larger height for large devices
        },
        minWidth: {
          xs: "80%", // Almost full width for extra small devices
          sm: "260px", // Fixed minimum width for small devices
          md: "300px", // Larger width for medium devices
          lg: "300px", // Maximum width for large screens
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: {
          xs: "15px", // Smaller padding for extra small devices
          sm: "25px", // Standard padding for small devices
          md: "35px", // More generous padding for medium devices
        },
        borderRadius: {
          xs: "10px", // Softer corners on smaller screens
          sm: "15px", // Standard rounded corners
          md: "20px", // More rounded for medium devices
        },
        boxShadow: {
          xs: "0px 2px 10px rgba(0, 0, 0, 0.15)", // Softer shadow on small screens
          sm: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Stronger shadow on larger screens
        },
        transition: "all 0.3s ease-in-out", // Smooth transition for all properties
       
    
      }}
    >
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
          }}
        >
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          sx={{
            marginBottom: "15px",
            backgroundColor: "#fff", // White background for input
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#66a6ff", // Blue border
              },
              "&:hover fieldset": {
                borderColor: "#ff6ec4", // Pink border on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ff6ec4", // Pink border when focused
              },
            },
          }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          sx={{
            marginBottom: "15px",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          sx={{
            marginBottom: "15px",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          sx={{
            marginBottom: "15px",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          sx={{
            backgroundColor: "#b39ddb", // Green color for submit button
            color: "#fff", // White text
            "&:hover": {
              backgroundColor: "#9c27b0", // Darker green on hover
            },
            marginBottom: "15px",
            padding: "10px",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          sx={{
            backgroundColor: "#fff9c4", // Pink to match the background
            color: "#000", // White text
            "&:hover": {
              backgroundColor: "#fff176", // Darker pink on hover
            },
            padding: "10px",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
