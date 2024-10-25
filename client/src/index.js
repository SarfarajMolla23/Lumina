import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./index.css";
import { reducers } from "./reducers"; // Ensure this imports your root reducer
import {thunk} from 'redux-thunk'

const container = document.getElementById("root");
const root = createRoot(container);

// Set up the Redux store using configureStore
const store = configureStore({
  reducer: reducers, // Set your root reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk if necessary
});

const clientId = "936156301926-fqqag18phc7ehnaoi1nj2spi9ipgvrmf.apps.googleusercontent.com"; 

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
