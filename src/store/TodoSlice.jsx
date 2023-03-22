import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const todo = action.payload;
      return [...state, todo];
    },
    deleteTodo(state, action) {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    updateTodo(state, action) {
      const { id, complited } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complited: !complited };
        }
        return todo;
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
