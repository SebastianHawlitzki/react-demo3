import React, {FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


type User ={
    surname: string,
    firstname: string,
    age: number
    email: string
}

//Forms-Aufgabe
export default function App() {

    const initialState ={
        surname: "",
        firstname: "",
        age: 0,
        email: ""

    }

    const [newUser, setNewUser] = useState<User>(initialState)

    const [status, setNewStatus] = useState(false)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetFirstName = event.target.name
        const value = event.target.value
        setNewUser({
            ...newUser,
            [targetFirstName]: value
        })
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
           setNewStatus(!status)

    }

    const onCLick = () => {
        if (!newUser.firstname) {
        toast.error("Fehler", {
            position: toast.POSITION.BOTTOM_RIGHT

        })}
        else if  (!newUser.surname) {
            toast.error("Fehler", {
                position: toast.POSITION.BOTTOM_RIGHT

            })}
        else if  (!newUser.age) {
            toast.error("Fehler", {
                position: toast.POSITION.BOTTOM_RIGHT

            })}
        else if  (!newUser.email) {
            toast.error("Fehler", {
                position: toast.POSITION.BOTTOM_RIGHT

            })}
        else {
            toast.success("Erfolg", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }

    }

  return (
    <div className="App">
      <header className="App-header">
<form onSubmit={onSubmit}>
    <input type="text" name="surname" value={newUser.surname} onChange={onChange}/>
    <input type="text" name="firstname" value={newUser.firstname} onChange={onChange}/>
    <input type="number" name="age" value={newUser.age} onChange={onChange}/>
    <input type="email" name="email" value={newUser.email} onChange={onChange}/>
    <button onClick={onCLick}>submit</button>
<p>{status &&

    newUser.firstname + newUser.surname
}

</p>
</form>
      </header>
<ToastContainer closeOnClick/>
    </div>
  );
}


