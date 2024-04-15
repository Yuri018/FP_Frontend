import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserState} from "./types"


// Начальное состояние пользователя
const initialState: UserState = {
  authenticated: false,
  name: "",
  authorities: [],
};

// Создаем срез для пользовательских данных
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
  },
});

// Действия для установки и удаления информации о пользователе
export const userActions = userSlice.actions;

// Редуктор для пользовательских данных
export const userReducers = userSlice.reducer;

