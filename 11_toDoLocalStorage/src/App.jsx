import { useEffect, useState } from "react";
import {ToDoProvider } from "./contexts/ToDoContext";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {
  //state to hold the list of toDos, it is initialized as an empty array
  const [toDos, setToDos] = useState([]);

const addToDo = (toDo) =>{
  setToDos((prev) => [{id:Date.now(), ...toDo}, ...prev])
}

const updateToDo = (id, toDo) =>{
  setToDos((prev) => prev.map( (prevToDo) => (prevToDo.id === id ? toDo : prevToDo) ))
}

const deleteToDo = (id) =>{
  setToDos( (prev) => prev.filter( (AllToDos) => AllToDos.id !== id )  )
}

const toggleComplete = (id) =>{
    setToDos( (prev) => prev.map( (prevToDo) => prevToDo.id === id ? {...prevToDo,completed: !prevToDo.completed } : prevToDo)) 

}

useEffect( () => {
  const toDos = JSON.parse( localStorage.getItem("toDos") )
  if(toDos){
   setToDos(toDos)
  }
},[])

useEffect( () => {
  localStorage.setItem("toDos", JSON.stringify(toDos)) 
}, [toDos])


  return (
    <ToDoProvider value = {{toDos, addToDo, updateToDo, deleteToDo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {toDos.map( (toDO) => (
              <div key={toDO.id} className="w-full">
                <ToDoItem toDo={toDO} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
