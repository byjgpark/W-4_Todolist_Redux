import './style.css';

// redux
import {useSelector} from 'react-redux';
import {selectTodos} from '../redux/modules/todos.js';

// router
import { useParams, useNavigate } from "react-router-dom";

export default function DPage() {
    
    const navigate = useNavigate();
    const {id} = useParams();

    const todos = useSelector(selectTodos);

    const findTodo = todos.find((todo) => {
        return todo.id == id;
    })

    return (
      <div>
        <div className="sc-bczRLJ cVOaKW">
            <div className="sc-gsnTZi hjvVIS">
                <div>
                    <div className="sc-dkzDqf gIyIMD">
                        <div>
                            {`ID : ${findTodo.id}`}
                        </div>
                        <button className="sc-jSMfEi dcERit"
                                onClick={() => {
                                    navigate("/");
                                }}>
                            이전으로
                        </button>
                    </div>
                    <h1 className="sc-hKMtZM jYnhbe">{findTodo.title}</h1>
                    <main className="sc-eCYdqJ gonIFz">{findTodo.body}</main>
                </div>
            </div>
        </div>
      </div>
     
    );
  }