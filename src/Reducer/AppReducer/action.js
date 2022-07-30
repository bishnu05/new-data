import * as types from "./ActionTypes";


const handleIncrement=()=>{
   return {type:types.INCREMENT,payload:1};
    //console.log(store.getState)
    // setCounter((temp)=>{
    //     return temp+1
    // })
  }
  const handleDecrement=()=>{
    //setCounter((prev)=>prev-1)
    return {type:types.DECREMENT,payload:1}
    //console.log(store.getState)
  }

  const todosRequest=()=>{
    return {
      type:types.GET_TODOS_REQUEST
    }
  }

  const todosSuccess=(payload)=>{
    return {
      type:types.GET_TODOS_SUCCESS,
      payload,
    }
  }
  const todosFailure=()=>{
    return {
      type:types.GET_TODOS_FAILURE
    }
  };
  const addTodoRequest=()=>{
    return{
      type:types.ADD_TODOS_REQUEST
    }
  }

  const addTodoSuccess=()=>{
    return{
      type:types.ADD_TODOS_SUCCESS
    }
  }

  const addTodoFailure=()=>{
    return{
      type:types.ADD_TODOS_FAILURE
    }
  }

  export {handleIncrement,handleDecrement,todosRequest,todosSuccess,todosFailure,addTodoRequest,addTodoFailure,addTodoSuccess};