import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment >
      <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">

        <div class="card">
          <div class="card-body p-5">
                <InputTodo />
                <ListTodos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
