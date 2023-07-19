// Reducer function to manage the state of the Todo application based on different actions
export default function appReducer(state, action) {
  switch (action.type) {
    // Case for adding a new task to the tasks array
    case "ADD_TASK":
      return {
        ...state,
        // Adding the new task to the tasks array using the payload from the action
        tasks: [...state.tasks, action.payload],
      };

    // Case for editing an existing task in the tasks array
    case "EDIT_TASK":
      // Get the updated task from the payload of the action
      const updatedTask = action.payload;

      // Map through the tasks array and find the task with the matching ID
      const updatedTasks = state.tasks.map((task) => {
        // If the task is found, return the updated task
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        // For other tasks, return them as they are
        return task;
      });

      // Return the state with the updated tasks array
      return {
        ...state,
        tasks: updatedTasks,
      };

    // Case for removing a task from the tasks array
    case "REMOVE_TASK":
      return {
        ...state,
        // Filter out the task with the matching ID and return the updated tasks array
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    // Default case: return the current state unchanged if the action type is not recognized
    default:
      return state;
  }
};
