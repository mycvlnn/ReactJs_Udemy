import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const timing = {
  enter: 400,
  exit: 1000,
};

class App extends Component {
  state = {
    modalIsOpen: false,
  };

  showModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  hideModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen}
          timeout={timing}
        >
          {(state) => {
            return (
              <div>
                <Modal closed={this.hideModal} state={state} />
                <Backdrop state={state} />
              </div>
            );
          }}
        </Transition>

        <button onClick={this.showModal} className="Button">
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
