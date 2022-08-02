import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../modules/todos';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
