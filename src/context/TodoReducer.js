export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_TASK":
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case "EDIT_TASK":
        const updatedtask = action.payload;
  
        const updatedtasks = state.tasks.map((task) => {
          if (task.id === updatedtask.id) {
            return updatedtask;
          }
          return task;
        });
  
        return {
          ...state,
          tasks: updatedtasks,
        };
  
      case "REMOVE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter(
            (task) => task.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };