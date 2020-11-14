import React, { useState } from "react";
import MainPlanner from "./MainPlanner";
export default function Planner(props) {
  const [cards, setCards] = useState([
    {
      _id: "5f1d7d648ada1e610003b817",
      title: "Style form (desktop/mobile)",
      list: "done",
      color: "#9c27b0",
      assignedTo: [["Lisa"]],
      due: "2020-07-26T12:56:00.000Z",
      description: "Make everything look good",
      category: "Design",
      id: "5f1d7d648ada1e610003b817",
      timeStamp: 1597048866863,
    },
    {
      _id: "5f1d9d6b8ada1e610003b93b",
      title: "Sort by added",
      list: "to do",
      color: "#2196f3",
      assignedTo: ["Lisa"],
      due: "2020-07-26T15:12:00.000Z",
      description: "Make sure the lists are sorted by add-time",
      category: "UX",
      timeStamp: 1597047729002,
      password: "",
    },
    {
      _id: "5f1d9d6b8ada1e610003b93b",
      title: "Something new",
      list: "in progress",
      color: "#2196f3",
      assignedTo: ["Lisa"],
      due: "2020-07-26T15:12:00.000Z",
      description: "Make sure the lists are sorted by add-time",
      category: "UX",
      timeStamp: 1597047729002,
      password: "",
    },
    {
      _id: "5f1d9d6b8ada1e610003b93b",
      title: "Something else",
      list: "barrier",
      color: "#2196f3",
      assignedTo: ["Lisa"],
      due: "2020-07-26T15:12:00.000Z",
      description: "Make sure the lists are sorted by add-time",
      category: "UX",
      timeStamp: 1597047729002,
      password: "",
    },
  ]);
  return (
    <main className="Planner hide">
      {cards === "" && <h1>LOADING</h1>}

      <MainPlanner cards={cards} />
    </main>
  );
}
