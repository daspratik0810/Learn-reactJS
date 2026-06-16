import React from "react"
import { useToDo } from "../contexts/ToDoContext";
import { useState } from "react";
import App from "../App";

function ToDoForm() {
    //it is  a form so we need to use the "addToDo" functionality from App.jsx
    const [toDo, setToDo] = useState("")
    const {addToDo} = useToDo()

    const add = (e) => {
        e.preventDefault()

        if(!toDo) return 

        addToDo({toDo, completed:false})
        setToDo("")
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" value={toDo} onChange={(e) => setToDo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default ToDoForm;