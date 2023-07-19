import React, { useContext, useState } from "react";
import "./Modal.css";
import { GlobalContext } from "../../context/TodoContext";
export default function Modal({ modalClose, onSubmit, defaultValue }) {
  // Accessing tasks from the GlobalContext
  const { tasks } = useContext(GlobalContext);
  // State to hold form validation errors
  const [errors, setErrors] = useState("");

  // State to manage the form data (task input)
  const [form, setForm] = useState(
    defaultValue || {
      task: "",
    }
  );

  // Function to validate the form fields
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

  // Function to handle changes in the form fields
  function handleChange(e) {
    // Updating the form state when the user types in the textarea
    setForm({ id: tasks.length + 1, ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Check if the form is valid before submitting
    if (!validateForm()) return;
    // Submitting the form data to the parent component (Todo) for processing
    onSubmit(form);
    // Closing the modal after form submission
    modalClose();
  }

  
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        // Close the modal if the user clicks outside the form area
        if (e.target.className === "modal-container") modalClose();
      }}
    >
      <div className="modal">
        <form action="">
          {/* Form group for the Task input */}
          <div className="form-group">
            <label htmlFor="task">Task</label>
            {/* Textarea for entering the task */}
            <textarea name="task" value={form.task} onChange={handleChange} />
          </div>
          {/* Displaying errors, if any */}
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          {/* Submit button */}
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
