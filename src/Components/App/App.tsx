import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "../../Routes/Notes";
import Add from "../../Routes/Add";
import Note from "../../Routes/Note";
import Edit from "../../Routes/Edit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Notes} />
          <Route path={"/add"} component={Add} />
          <Route path={"/note/:id"} component={Note} />
          <Route path={"/edit/:id"} component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
