import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { RootState } from "./reducer.ts";

export const useTypedSelector: TypedUseSelectorHook<RootState> =
  useReduxSelector;

export function useInvitesStore() {
  return useTypedSelector((state) => state.invites);
}
