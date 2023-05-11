// importing all the required variables and files
import * as actions from "./actionTypes";
import * as helper from "./Helper";

// getting up all the habits from the local storage
let habits = localStorage.getItem("habits");
let initialState = [];
if (habits === null || habits === []) {
  localStorage.setItem("habits", JSON.stringify(new Array(0)));
  initialState = [];
}
if (habits !== null && habits !== []) {
  initialState = JSON.parse(habits);
}

// creating up a habits reducer function
function HabitReducer(state = initialState, action) {
  // checking for add habit action
  if (action.type === actions.HABIT_ADDED) {
    const newHabit = {
      id: Math.random() * 1000,
      title: action.payload.title,
      category: action.payload.category,
      week: helper.createWeek(new Date()),
      workDone: 0,
      ratings: 0,
    };
    const newState = [newHabit, ...state];
    localStorage.setItem("habits", JSON.stringify(newState));

    return newState;
  }
  // checking for deleting a habit
  if (action.type === actions.HABIT_DELETED) {
    const newHabits = state.filter((habit) => {
      return habit.id !== action.id;
    });
    localStorage.setItem("habits", JSON.stringify(newHabits));
    return newHabits;
  }
  // checking for changing the status of the habit
  if (action.type === actions.STATUS_CHANGED) {
    const habitIndex = state.indexOf(action.payload.habit);
    if (state[habitIndex].week[action.payload.weekId].status === "done") {
      state[habitIndex].workDone += -1;
    } else if (action.payload.status === "done") {
      state[habitIndex].workDone += 1;
    }
    state[habitIndex].week[action.payload.weekId].status =
      action.payload.status;
    localStorage.setItem("habits", JSON.stringify(state));
    return state;
  }
  // checking for updating the habits
  if (action.type === actions.UPDATE_HABITS) {
    const newState = helper.updateHabits(state);
    localStorage.setItem("habits", JSON.stringify(newState));
    return state;
  }
  return state;
}

// exporting the reducer
export default HabitReducer;