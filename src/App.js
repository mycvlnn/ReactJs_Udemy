import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { CSSTransition } from "react-transition-group";

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
        <Modal closed={this.hideModal} show={this.state.modalIsOpen} />

        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen}
          timeout={1000}
          classNames="fade-in"
        >
          <Backdrop className="Backdrop" />
        </CSSTransition>

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
