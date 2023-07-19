import React, { useContext, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Todo.css";
import { GlobalContext } from "../../context/TodoContext";
import Modal from "../../components/modal/Modal";
export default function Todo() {
  const { tasks, addTask, editTask, removeTask } = useContext(GlobalContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  function handleEditRow(task) {
    setRowToEdit(task.id);
    setModalOpen(true);
  }

  function handleSubmit(newRow) {
    console.log(rowToEdit);
    rowToEdit === null ? addTask(newRow) : editTask(newRow);
  }

  return (
    <div className="todo-main">
      {tasks.map((task) => (
        <div className="container">
          <div>{task.task}</div>
          <div className="react-icons">
            <div style={{ cursor: "pointer" }}>
              <BsFillTrashFill onClick={() => removeTask(task.id)} />
            </div>
            <div style={{ cursor: "pointer" }}>
              <BsFillPencilFill onClick={() => handleEditRow(task)} />
            </div>
          </div>
        </div>
      ))}
      <button className="btn" onClick={() => setModalOpen(true)}>
        ADD
      </button>

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
