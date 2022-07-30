import React from 'react'
import { useEffect } from 'react'
import TodoInput from './TodoInput'
import axios from "axios"
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import {todosRequest,todosSuccess,todosFailure, addTodoRequest, addTodoSuccess, addTodoFailure} from "../Reducer/AppReducer/action"
export const Todos = () => {
     //first task to get the todos data from the db.json file
    const dispatch = useDispatch()
    const {todos,isLoading,isError} = useSelector(store=>{
        //console.log(store)
        return {
            todos:store.AppReducer.todos,
            isLoading:store.AppReducer.isLoading,
            isError:store.AppReducer.isError,
        };
    }, shallowEqual);
    // console.log(todos);

    const getTodos=()=>{
        dispatch(todosRequest())
       return axios.get("http://localhost:8080/todos")
        .then((r)=>{
            dispatch(todosSuccess(r.data))
        })
        .catch((e)=>{
            dispatch(todosFailure())
        });
    }
   const handleAddTodo=(payload)=>{
    addTodos(payload).then(()=>getTodos())
   }


    const addTodos=(payload)=>{
        dispatch(addTodoRequest())
        return axios.post("http://localhost:8080/todos",payload)
        .then(r=>{
            dispatch(addTodoSuccess())
        })
        .catch(e=>{
            console.log(e)
            dispatch(addTodoFailure())
        })
    }
     useEffect(()=>{
        getTodos()
    },[])
  return (
    <div>
        <h1>Todos</h1>
        <TodoInput addTodos={handleAddTodo}/>
        {todos?.length>0 && todos.map((item)=>{
            return <div key={item.id}>{item.title}</div>
        })}
    </div>
  )
}
