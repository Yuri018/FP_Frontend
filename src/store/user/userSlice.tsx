import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {UserState} from "./types"
import { instance } from "../../utils/axios";


const initialState: UserState = {
  authenticated: false,
  name: "",
  authorities: [],
};

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async () => {
    const response = await instance.get("/auth/get_auth_info");
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state: UserState, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUserInfo: (state: UserState) => {
      return initialState;
    },
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
  //     state.authenticated = true;
  //     state.name = action.payload.name;
  //     state.authorities = action.payload.authorities;
  //   });
  // },
});


// Действия для установки и удаления информации о пользователе
export const userActions = userSlice.actions;

// Редуктор для пользовательских данных
export const userReducers = userSlice.reducer;

