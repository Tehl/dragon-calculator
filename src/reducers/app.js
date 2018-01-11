import { combineReducers } from "redux";
import options from "./options";
import inventory from "./inventory";

const app = combineReducers({
  options,
  inventory
});

export default app;
