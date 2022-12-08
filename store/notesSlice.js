import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    setNotesData: (state, action) => {
      state.notes = action.payload;
    },
    sortNotesData: (state, _action) => {
      console.log("sort");
      console.log(
        state.notes.sort((a, b) => {
          a.name.localeCompare(b.name);
        })
      );
    },
  },
});

export const { setNotesData, sortNotesData } = notesSlice.actions;

export default notesSlice;
