import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cartSlics from "./features/cart/cartSlics";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlics,
  },
});

export default store;
