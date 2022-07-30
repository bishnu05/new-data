import { useSelector } from "react-redux";
import {store} from "../Reducer/store";

const CounterValue=()=>{
    //const {counter} = store.getState();
    const counter = useSelector((store)=>store.AppReducer.counter)
    return (
        <div>
            <h1>Counter:{counter}</h1>
        </div>
    )
}

export {CounterValue} ;