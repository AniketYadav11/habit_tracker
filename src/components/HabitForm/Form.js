// importing required libraries
import React, { useRef } from "react";
import store from "../../store/store";
import { useNavigate } from "react-router-dom";

// improting required files
import Class from "./Form.module.css";
import { addingHabit } from "../../store/actions";
import { Store } from "react-notifications-component";

// creating up form component for adding new habits
const Form = () => {
  // useing ref for getting input from user
  const habitRef = useRef();
  const categoryRef = useRef();

  // using useNavigate hook for redirecting
  const navigation = useNavigate();

  // creating up a function for adding up a habit
  function addHabit(e) {
    e.preventDefault();
    const data = {
      title: habitRef.current.value,
      category: categoryRef.current.value,
    };
    if (data.title.trim() === "" || data.category.trim() === "") {
      // show some notifications
      Store.addNotification({
        title: "OH NO!",
        message: "PLEASE ENTER THE VALID HABIT AND CATEGORY",
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });

      return;
    }
    // dispatch an action
    store.dispatch(addingHabit(data));
    // redirecting to dashboard
    navigation("/dashboard");
  }

  return (
    <form action="" className={Class.container}>
      <div>
        <label>Enter Habit: </label>
        <br />
        <input type={"text"} ref={habitRef} required placeholder="Walking..." />
      </div>
      <div>
        <label>Enter Category: </label>
        <br />
        <input
          type={"text"}
          ref={categoryRef}
          required
          placeholder="Fitness..."
        />
      </div>
      <button onClick={addHabit} type="submit">
        Save
      </button>
    </form>
  );
};

// exporting the form component by default
export default Form;