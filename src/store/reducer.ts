import { combineReducers } from "redux";
import { invitesReducer } from "./invites/reducer";

const root = () =>
  combineReducers({
    invites: invitesReducer,
  });

export type RootState = Readonly<ReturnType<ReturnType<typeof root>>>;

export default root;
