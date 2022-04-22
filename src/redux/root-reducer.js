import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "./posts/postReducer";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["/*localStorage*/"],
};

const rootReducer = combineReducers({
    posts: postsReducer,
});

export default persistReducer(persistConfig, rootReducer);
