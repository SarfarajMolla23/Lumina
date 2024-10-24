import { combineReducers } from "redux";

import postsReducer from "./posts.js";

export const reducers = combineReducers({ posts: postsReducer });
