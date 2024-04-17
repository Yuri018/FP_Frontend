import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit"


// Селекторы для доступа к данным пользователя
const globalState = (state: RootState) => state;

// Селектор для получения признака аутентификации пользователя
export const searchSelectors = createSelector(
  globalState,
  (state) => state.searchData
);


