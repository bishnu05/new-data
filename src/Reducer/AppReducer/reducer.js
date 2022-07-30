import * as data from "./ActionTypes";
import {loadData,saveData} from "../../utils/accessLocalStorage"
const initState={
    counter:loadData("counter")||3,
    todos:[],
    isLoading:false,
    isError:false,
    isAuth:false,
    token:"",
}

const reducer=(oldState=initState,action)=>{
    const {type,payload} = action
    switch (type) {
        case data.INCREMENT:
            let newCountIncrement=oldState.counter+payload;
            saveData("counter",newCountIncrement)
            return {...oldState,counter:newCountIncrement};
        case data.DECREMENT :
            let newCountDecrement=oldState.counter-payload;
            saveData("counter",newCountDecrement)
            return {...oldState,counter:newCountDecrement};
        case data.GET_TODOS_REQUEST:
            return{
                ...oldState,isLoading:true,isError:false,
            }
            case data.GET_TODOS_SUCCESS:
                return{
                    ...oldState,isLoading:false,
                    todos:[...payload],
                    isError:false,
                }
            case data.GET_TODOS_FAILURE:
            return{
                ...oldState,isLoading:false,
                isError:true,
            }
         default:
            return oldState;
    }
};

export {reducer} ;