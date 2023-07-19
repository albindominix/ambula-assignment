import React, { createContext, useReducer } from 'react';

import appReducer from './TodoReducer';

const initialState = {
  tasks: [
    {
      id: 1,
      task: "Task 1",
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task
    });
  }

  function editTask(task) {
    dispatch({
      type: "EDIT_TASK",
      payload: task
    });
  }

  function removeTask(id) {
    dispatch({
      type: "REMOVE_TASK",
      payload: id
    });
  }

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