// importing required libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// importing required files
import { deletingHabit } from "../../store/actions";
import store from "../../store/store";
import Class from "./Habit.module.css";

// creating a Habit component
const Habit = (props) => {
  // using useNavigate hook for redirecting
  const navigation = useNavigate();

  // function for deleting an habit
  function deleteHabit(id) {
    store.dispatch(deletingHabit(id));
    props.reRender();
  }
  // function for redirecting user to its habit details page
  function DetailHandler(id) {
    navigation(`habit/${id}/detail`);
  }
  return (
    <div className={Class.container}>
      <h3>{props.title}</h3>
      <div>
        <p>Category: {props.category}</p>
        <p>
          count: {props.workDone}/{props.week.length}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteHabit(props.id);
          }}
          type="button"
        >
            Delete
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            DetailHandler(props.id);
          }}
          type="button"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

// exporting the component
export default Habit;