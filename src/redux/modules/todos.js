// uuid
import uuid from "react-uuid"
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
              id: uuid(),
              title: "react를 배워봅시다.",
              body: "빨리 끝내고 싶다.",
              isDone: false,
            },
            {
              id: uuid(),
              title: "redux를 배워봅시다.",
              body: "하드코딩말고..",
              isDone: true,
            },
          ]
    },
    reducers: {
      addPost: (state, action) => {
        state.todos = [...state.todos, action.payload]
      
      },
      delPost: (state, action) => {
        const todoObj = state.todos.filter(todo => 
          todo.id !== action.payload
          )
          state.todos = todoObj
      },
      compPost: (state, action) => {
        const todoObj = state.todos.map((todo) => {
          
          if(todo.id === action.payload){
            todo.isDone = true   
           }
          return todo 
        })
          state.todos = todoObj
      },
      canPost: (state, action) => {
        const todoObj = state.todos.map((todo) => {
          
          if(todo.id === action.payload){
            todo.isDone = false   
           }
          return todo 
        })
          state.todos = todoObj
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {addPost, delPost, compPost, canPost} = todoSlice.actions

  export const selectTodos = (state) => state.todo.todos
  
  export default todoSlice.reducer