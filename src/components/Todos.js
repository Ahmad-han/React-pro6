import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { loadTodos } from "../redux/action";
import { Todo } from "./Todo";



export const Todos = () => {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect(() => {
        dispatch(loadTodos(id))
    }, [id])

    return (
        <ul className="todos">
            {
                todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo}/>
                })
            }
        </ul>
    )
}