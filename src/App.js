import logo from './logo.svg';
import './App.css';
import {app , provider} from './firebase'
import { useState } from 'react';
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";

function App() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const auth = getAuth()

  async function hendel(){
    try{
      const ans =  await createUserWithEmailAndPassword(auth , email , password);
    console.log(ans);
    alert('user sign in')
    }
    catch (e){
      alert(e.message)
    }
  }
  async function hendel2(){
    try{
      const ans2 =  await signInWithEmailAndPassword(auth , email , password);
      console.log(ans2);
      alert('user log in')
    }
    catch (e){
      alert(e.message);
    }
  }
  async function hendel3(){
    try{
      const ans3 =  await signInWithPopup(auth , provider);
    console.log(ans3);
    // alert('user sign in')
    }
    catch (e){
      alert(e.message)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={hendel}>Sign in</button>
        <button onClick={hendel2}>Log in</button>
        <button onClick={hendel3}>Sign up with google</button>
      </header>
    </div>
  );
}

export default App;
