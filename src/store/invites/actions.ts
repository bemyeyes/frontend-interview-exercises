import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer.ts";
import { Action } from "redux";
import callManager from "../../data/call-invites-api.ts";

export enum InvitesActionType {
  FETCH_REQUEST = "invites.FETCH_REQUEST",
  FETCH_COMPLETED = "invites.FETCH_COMPLETED",
  FETCH_FAILED = "invites.FETCH_FAILED",
  CLEAR_ALL = "invites.CLEAR_ALL",
}

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>;

export const fetchInvites = (): ThunkResult<void> => async (dispatch) => {
  dispatch({
    type: InvitesActionType.FETCH_REQUEST,
  });
  try {
    const result = await callManager.activeInvites();
    dispatch({
      type: InvitesActionType.FETCH_COMPLETED,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: InvitesActionType.FETCH_FAILED,
      payload: {
        error,
      },
    });
  }
};

export const clearAll = () => {
  return {
    type: InvitesActionType.CLEAR_ALL,
  };
};
