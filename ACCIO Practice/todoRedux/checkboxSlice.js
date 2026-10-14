
import { createSlice } from "@reduxjs/toolkit";

const checkboxSlice = createSlice({
  name: "checkbox",

  initialState: [
    { id: 1, name: "React", checked: false },
    { id: 2, name: "Redux", checked: false },
    { id: 3, name: "JavaScript", checked: false },
    { id: 4, name: "Node.js", checked: false }
  ],

  reducers: {
    toggleAll: (state) => {
      const allChecked = state.every(
        (item) => item.checked
      );

      state.forEach((item) => {
        item.checked = !allChecked;
      });
    },

    toggleItem: (state, action) => {
      const item = state.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.checked = !item.checked;
      }
    }
  }
});

export const { toggleAll, toggleItem } =
  checkboxSlice.actions;

export default checkboxSlice.reducer;
