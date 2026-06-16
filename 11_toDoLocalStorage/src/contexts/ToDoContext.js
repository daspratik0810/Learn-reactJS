import {createContext, useContext} from "react";
//In COntext APi, we need to 1) create context 2) use the context 3) consume the context

// a context is created 
export const ToDoContext = createContext({
    //here we can define the default values for the context, toDos are the default values for the context having an array of multiple objects with id, toDo and completed properties
    toDos: [
        {   id: 1,
            toDo: "Todo msg",
            completed: false
        }
    ],
    //this is a function that will be used to add a new toDo to the context, it will be implemented later
    addToDo: (toDo) => {},
    //this is a function that will be used to update a toDo in the context, it will be implemented later
    updateToDo: (id, toDo) => {},
    //this is a function that will be used to delete a toDo from the context, it will be implemented later
    deleteToDo : (id) => {},
    //this is a function that will be used to toggle the completed property of a toDo in the context, it will be implemented later
    toggleComplete : (id) => {}
})

//callBack function/method to use the created Context
export const useToDo = () => {
    return useContext(ToDoContext)
}

//created a provider that will be used later to wrap components
export const ToDoProvider = ToDoContext.Provider