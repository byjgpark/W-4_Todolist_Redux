import React from 'react'; 
import './style.css';

// CSS
import styled from "styled-components";

// redux
import {delPost,selectTodos,compPost,canPost} from '../../redux/modules/todos.js'
import { useSelector, useDispatch } from 'react-redux';

// Router
import { Link } from "react-router-dom";

function Todo() {

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch()

  return (
    <div className="list-container"> 
        <h2 className="list-title">Working... 🔥</h2>
        <div className="list-wrapper">
  {/* if todo.isDone is false, it moves to the Working Section*/}
  {todos.map((todo) => {
      if (todo.isDone === false) {
        return (
            <div className="todo-container">
                 <Link to={`/DPage/${todo.id}`}>상세보기</Link>
              <div className="todo" key={todo.id}>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
              </div>
              <div className="button-set">
                <button className="todo-delete-button button" onClick={() => {dispatch(delPost(todo.id))}}>삭제하기</button>
                <button className="todo-complete-button button" onClick={() => {dispatch(compPost(todo.id))}}>완료</button>
              </div>
            </div>
        )
      }
    })}
    </div>

  <h2 className="list-title">Done...!🎉</h2>
  <div className="list-wrapper">
  {/* if todo.isDone is true, it moves to the Done Section*/}
  {todos.map((todo) => {
      if (todo.isDone === true) {
        return (
          <div className="list-wrapper">
            <div className="todo-container">
            <Link to={`/DPages/${todo.id}`}>상세보기</Link>
              <div className="todo" key={todo.id}>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
              </div>
              <div className="button-set">
                <button className="todo-delete-button button" onClick={()=> {dispatch(delPost(todo.id))}}>삭제하기</button>
                <button className="todo-complete-button button" onClick={() => {dispatch(canPost(todo.id))}}>취소</button>
              </div>
            </div>
          </div>
        )
      }
    })
  }
  </div>
</div>
  )
}

export default Todo;

