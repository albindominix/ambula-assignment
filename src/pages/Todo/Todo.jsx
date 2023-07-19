import React, { useContext, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Todo.css";
import { GlobalContext } from "../../context/TodoContext";
import Modal from "../../components/modal/Modal";
export default function Todo() {

  // Using the GlobalContext to access tasks, addTask, editTask, and removeTask functions
  const { tasks, addTask, editTask, removeTask } = useContext(GlobalContext);
  // State to control the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);
  // State to keep track of the task being edited in the modal
  const [rowToEdit, setRowToEdit] = useState(null);

   // Function to set the task to edit and open the modal for editing
  function handleEditRow(task) {
    setRowToEdit(task.id);
    setModalOpen(true);
  }

  // Function to handle form submission from the modal
  function handleSubmit(newRow) {
    console.log(rowToEdit);
    // If rowToEdit is null, it means we're adding a new task, otherwise, we're editing an existing task
    rowToEdit === null ? addTask(newRow) : editTask(newRow);
  }

  return (
    <div className="todo-main">
       {/* Mapping through the tasks and displaying each task */}
      {tasks.map((task) => (
        <div className="container">
          <div>{task.task}</div>
          <div className="react-icons">
            <div style={{ cursor: "pointer" }}>
               {/* Button to remove the task */}
              <BsFillTrashFill onClick={() => removeTask(task.id)} />
            </div>
            <div style={{ cursor: "pointer" }}>
              {/* Button to edit the task */}
              <BsFillPencilFill onClick={() => handleEditRow(task)} />
            </div>
          </div>
        </div>
      ))}

            {/* Button to add a new task */}
      <button className="btn" onClick={() => setModalOpen(true)}>
        ADD
      </button>
{/* Modal for editing or adding a task */}
      {modalOpen && (
        <Modal
          modalClose={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && tasks[rowToEdit - 1]}
        />
      )}
    </div>
  );
}
