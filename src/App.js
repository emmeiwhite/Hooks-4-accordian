import React from "react";
import QuestionList from "./components/QuestionList";

import "./App.css";
import SideBar from "./components/SideBar";
function App() {
  return (
    <section className="section-wrapper">
      <SideBar />
      <QuestionList />
    </section>
  );
}

export default App;
