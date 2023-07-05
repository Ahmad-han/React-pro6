import { Routes, Route } from "react-router-dom";
import { Users } from "./Users";
import { Todos } from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/action";





export const App = () => {
const loadingUsers = useSelector((state) => state.users.loading)
const loadingTodos = useSelector((state) => state.users.loading)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(loadUsers())
}, [])

if(loadingUsers || loadingTodos) {
  return (
    <h1>Идет загрузка...</h1>
  )
}

  return (
    <Routes>
      <Route path="/:id?" element={
        <div className="container">
              <Users />
              <Todos />
        </div> 
      }/>
    </Routes>
  );
}


