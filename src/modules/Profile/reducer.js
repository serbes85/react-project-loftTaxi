import { handleActions } from "redux-actions";
import { fetchInitialState } from "./actions";

export const profileData = handleActions(
  {
    [fetchInitialState]: (_state, action) => action.payload,
  },
  null
);

export const getProfileData = (state) => state.profile.profileData;
