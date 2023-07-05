import { Routes, Route } from "react-router-dom";
import { Users } from "./Users";
import { Todos } from "./Todos";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/action";





export const App = () => {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(loadUsers())
}, [])



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


