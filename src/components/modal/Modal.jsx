import React, { useContext, useState } from "react";
import "./Modal.css";
import { GlobalContext } from "../../context/TodoContext";
export default function Modal({ modalClose, onSubmit, defaultValue }) {
  const { tasks} = useContext(GlobalContext);
  const [errors, setErrors] = useState("");
  const [form, setForm] = useState(
    defaultValue || {
      task: "",
    }
  );

  const validateForm = () => {
    if (form.task) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(form)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };
  
  function handleChange(e) {
    setForm({ id:tasks.length +1, ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(form);
    modalClose();
  }

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") modalClose();
      }}
    >
      <div className="modal">
        <form action="">

          <div className="form-group">
            <label htmlFor="task">Task</label>
            <textarea name="task" value={form.task} onChange={handleChange} />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <div className="submit-btn">
            <button className="submit" onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
