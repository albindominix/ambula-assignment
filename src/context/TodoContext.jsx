// Importing necessary modules and the appReducer
import React, { createContext, useReducer } from 'react';
import appReducer from './TodoReducer';

// Initial state of the Todo application
const initialState = {
  tasks: [
    {
      id: 1,
      task: "Task 1",
    }
  ]
};

// Creating a GlobalContext using createContext and initializing it with the initial state
export const GlobalContext = createContext(initialState);

// Creating the TodoProvider component to manage Todo state
export const TodoProvider = ({ children }) => {
  // Using useReducer to manage state with the appReducer and the initial state
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Function to add a new task to the Todo list
  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task
    });
  }

  // Function to edit an existing task in the Todo list
  function editTask(task) {
    dispatch({
      type: "EDIT_TASK",
      payload: task
    });
  }

  // Function to remove a task from the Todo list by its ID
  function removeTask(id) {
    dispatch({
      type: "REMOVE_TASK",
      payload: id
    });
  }

  // Providing the state and functions to children components via the GlobalContext.Provider
  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        editTask,
        removeTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
