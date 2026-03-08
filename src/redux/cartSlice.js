import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    IncreaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    DecreaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { AddItem, IncreaseQty, DecreaseQty, RemoveItem } =
  cartSlice.actions;
export default cartSlice.reducer;
