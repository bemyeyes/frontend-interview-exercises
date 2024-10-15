import type { Action, Reducer } from "redux";
import { combineReducers } from "redux";
import { Invite } from "../../data/call-invites-api.ts";
import { InvitesActionType } from "./actions.ts";

type InvitesFetchAction = Action & {
  payload: Invite[];
};

const invites: Reducer<Invite[], InvitesFetchAction> = (state = [], action) => {
  switch (action.type) {
    case InvitesActionType.FETCH_COMPLETED:
      return action.payload;
    case InvitesActionType.CLEAR_ALL:
      return [];
    default:
      return state;
  }
};

const isFetching: Reducer<boolean, InvitesFetchAction> = (
  state = false,
  action,
) => {
  switch (action.type) {
    case InvitesActionType.FETCH_REQUEST:
      return true;
    case InvitesActionType.FETCH_COMPLETED:
    case InvitesActionType.FETCH_FAILED:
      return false;
    default:
      return state;
  }
};

const fetchFailed: Reducer<boolean, InvitesFetchAction> = (
  state = false,
  action,
) => {
  switch (action.type) {
    case InvitesActionType.FETCH_FAILED:
      return true;
    case InvitesActionType.FETCH_COMPLETED:
    case InvitesActionType.FETCH_REQUEST:
      return false;
    default:
      return state;
  }
};

const combinedInvites = combineReducers({
  invites,
  isFetching,
  fetchFailed,
});

type InvitesState = ReturnType<typeof combinedInvites>;

export const invitesReducer: Reducer<InvitesState> = (state, action) => {
  if (action.type === InvitesActionType.CLEAR_ALL) {
    state = undefined;
  }

  // @ts-expect-error: WIP
  return combinedInvites(state, action);
};
