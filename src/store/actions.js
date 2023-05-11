// importing all the actions variables
import * as actions from "./actionTypes";

// creating a action for addingHabbits
export const addingHabit = function (data) {
  return {
    type: actions.HABIT_ADDED,
    payload: {
      title: data.title,
      category: data.category,
    },
  };
};

// creating a function for deleting a habbit
export const deletingHabit = function (id) {
  return {
    type: actions.HABIT_DELETED,
    id,
  };
};

// creating a action for changing the status of a particular day
export const changingStatus = function (habit, weekId, status) {
  return {
    type: actions.STATUS_CHANGED,
    payload: {
      habit,
      weekId,
      status,
    },
  };
};

// creating a action for updating all habits
export const updatingHabits = function () {
  return {
    type: actions.UPDATE_HABITS,
  };
};