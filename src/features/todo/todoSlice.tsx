import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
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
];

export const todoSlice = createSlice({
  name: "todo app ho",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload,
      };
      state.push(newTask);
    },
    deleteIndividualTodo: (state, action) => {
      //   state.todo.id.filter(action.payload)
      //     ? action.payload !== state.todo.id
      //     : "";
      // },
      console.log(state, "ss");
      console.log(action.payload, "rrrrrrrr");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteIndividualTodo } = todoSlice.actions;

export default todoSlice.reducer;
