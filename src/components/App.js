import React, { PureComponent } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloCreate from "./TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Routes from "../routes";
import { sort } from "../actions";
import '../styles/output.css'
class App extends PureComponent {
  render() {
    return <Routes />;
  }
}

export default App;
