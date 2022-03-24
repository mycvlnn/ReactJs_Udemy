import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const defaultStyle = {
  transition: "opacity 300ms ease-in-out",
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

class App extends Component {
  state = {
    modalIsOpen: false,
    toggle: false,
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
        <button
          onClick={() =>
            this.setState((prevState) => ({ toggle: !prevState.toggle }))
          }
        >
          Toggle
        </button>
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.toggle}
          timeout={1000}
          onEnter={() => console.log("enter")}
          onEntering={() => console.log("entering")}
          onEntered={() => console.log("entered")}
          onExit={() => console.log("exit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div
              style={{
                background: "orange",
                width: 200,
                height: 200,
                margin: "auto",
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              BOX
            </div>
          )}
        </Transition>
        <h1>React Animations</h1>

        {this.state.modalIsOpen && (
          <Modal closed={this.hideModal} show={this.state.modalIsOpen} />
        )}
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
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
