// importing required libraries
import React, { useEffect, useState } from "react";

// importing required filea and functions
import Habit from "../Habit/Habit";
import store from "../../store/store";
import Class from "./dashBoard.module.css";
import { updatingHabits } from "../../store/actions";

// creating a dashboard functions
const DashBoard = () => {
  // setting up state for habits
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    // dispatching an action for updating all habits
    store.dispatch(updatingHabits());

    // setting up the state of habits
    setHabits(store.getState());
  }, []);

  // function for rerendering the dashboard componenet
  function reRender() {
    setHabits(store.getState());
  }
  return (
    <div className={Class.container}>
      <h1>Your Habits</h1>
      {habits.length === 0 ? (
        <h1 className={Class.result}>
          No Habits To Display. Add New Habits to Track
        </h1>
      ) : (
        habits.map((habit) => {
          return <Habit reRender={reRender} {...habit} key={habit.id} />;
        })
      )}
    </div>
  );
};

// exporting component by default
export default DashBoard;