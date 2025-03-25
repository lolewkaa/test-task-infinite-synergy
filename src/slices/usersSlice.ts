import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoItem } from "../types/types";

type UsersState = {
  value: RepoItem[];
};

const initialState: UsersState = {
  value: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserRepo: (state: UsersState, action: PayloadAction<RepoItem[]>) => {
      state.value.push(...action.payload);
    },
    editUser: (state: UsersState, action: PayloadAction<RepoItem>) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value.splice(index, 1, action.payload);
    },
  },
});

export const { setUserRepo, editUser } = usersSlice.actions;

export default usersSlice.reducer;
