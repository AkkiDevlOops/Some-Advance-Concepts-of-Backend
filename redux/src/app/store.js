import { configureStore } from "@reduxjs/toolkit";
import reducer from "../functions/todo/todo";

export const store = configureStore({
    reducer : reducer
})