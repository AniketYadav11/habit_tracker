// importing required libraries
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// importing required files
import store from "../../store/store";
import ShowWeek from "../showWeek/showWeek";
import Class from "./HabitDetail.module.css";

// creating a HabitDetail component
const HabitDetail = () => {
  // using useParams hook for getting params form url
  const params = useParams();

  // managing the state
  const [habitDetail, setHabitDetail] = useState({});
  useEffect(() => {
    // filtering and setting up the habits
    const habit = store.getState();
    const habitDetail = habit.filter((h) => {
      return h.id === parseFloat(params.id);
    });
    setHabitDetail(...habitDetail);
  }, [params.id]);
  return (
    <div>
      <h1 className={Class.head}>{habitDetail.title}</h1>
      <div className={Class.detail}>
        <p>Category: {habitDetail.category}</p>
        <p>
          Count: {habitDetail.workDone}/{habitDetail.week?.length}
        </p>
      </div>
      <div className={Class.weeks}>
        {habitDetail.week?.map((day, index) => {
          return <ShowWeek habit={habitDetail} {...day} index={index} />;
        })}
      </div>
    </div>
  );
};

// exporiting the functions by default
export default HabitDetail;