import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Todos } from "./Components/Todos";
import { CounterButton } from "./Counter/CounterButton";
import { CounterValue } from "./Counter/CounterValue";
import { loginFailure, loginRequest, loginSuccess } from "./Reducer/AuthReducer/action";

function App() {
  const [useremail,setUserEmail] = useState('');
  const [password,setPassWord] =useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector(store=>store.AuthReducer.isAuth)

  const handleLogin = () => {
    if(useremail && password){
      const payload={
        email:useremail,
        password
      };
      dispatch(loginRequest())
      //console.log(payload);
     axios.post("https://reqres.in/api/login",payload)
     .then(r=>{
      console.log(r.data)
      return dispatch(loginSuccess(r.data))})
     .catch((e)=>dispatch(loginFailure(e)))
    }
  }
  return (
    <div>
      <CounterValue />
      <CounterButton/>
      <br />
      <div>
        <input  placeholder="email" type="email" value={useremail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
        <br />
        <br />
        <input placeholder="password" type="password" value={password} onChange={(e)=>setPassWord(e.target.value)}/>
        <br />
        <br />
        <button onClick={handleLogin}>LOGIN</button>
      </div>
      {isAuth && <Todos/>}
   </div>
  );
}

export default App;
