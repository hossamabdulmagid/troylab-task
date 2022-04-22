import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


//blacklist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["/*localStorage*/"],
};
//whitelist
const rootReducer = combineReducers({});

export default persistReducer(persistConfig, rootReducer);
