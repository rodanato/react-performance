
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./box.component";
import Button from "@material-ui/core/Button";
import { css } from 'emotion';

type Props = {};

type State = {
  list: string[]
};

const purpleColor = css`
  color: rebeccapurple;
`

class App extends Component<Props, State> {
  state = {
    list: []
  };

  loadItemstoList(list: boolean[]) {
    let newList = list;

    newList.push("uno");
    newList.push("223");

    return newList;
  }

  componentDidMount() {
    const list = this.loadItemstoList(this.state.list);

    this.setState({ list: list });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="list-container">
          {this.state.list.length > 0 &&
            this.state.list.map((item, i) => (
              <h2 className={purpleColor} key={i}>
                {item}
              </h2>
            ))}
        </div>

        <Box />

        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
