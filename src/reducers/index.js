import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import UserNameReducer from "./UserNameReducer";

export default combineReducers({
    posts: PostsReducer,
    users: UserNameReducer
})