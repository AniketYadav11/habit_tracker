// importing required libraraies
import React, { useState } from "react";

// improrting required files
import Form from "../HabitForm/Form";
import Class from "./Home.module.css";

// creating a Home component
const Home = () => {
  // setting up the state for showing up form
  const [showForm, setShowForm] = useState(false);

  // creating a handler function for showing form
  function showformHandler(e) {
    e.preventDefault();
    setShowForm(true);
  }
  return (
    <div className={Class.container}>
      {showForm && <Form />}
      {!showForm && (
        <button onClick={showformHandler} type="button">
          Add Habit
        </button>
      )}
    </div>
  );
};

// exporting the home component by default
export default Home;