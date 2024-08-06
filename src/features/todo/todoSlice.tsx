import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  allTodos: [
    {
      id: 1,
      title: "Hello",
      // content: "Hi",
    },
    {
      id: 2,
      title: "Hello2",
      //  content: "Hi2"
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo app ho",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload,
      };
      state.allTodos.push(newTask);
    },
    deleteIndividualTodo: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (item) => item.id !== action.payload
      );
    },
    edit: (state, action) => {
      state.allTodos = state.allTodos.map((item) =>
        item.id === action.payload.id
          ? { ...item, id: action.payload.id, title: action.payload.title }
          : item
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteIndividualTodo, edit } = todoSlice.actions;

export default todoSlice.reducer;
