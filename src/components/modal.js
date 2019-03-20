import React, { Component } from "react"
import "./modal.css"

const ModalBox = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  )
}

export default class Modal extends Component {
  state = {
    show: false,
  }
  showModal = () => {
    this.setState({
      show: true,
    })
  }
  hideModal = () => {
    this.setState({
      show: false,
    })
  }
  render() {
    return (
      <div className="container">
        <ModalBox show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </ModalBox>
        <button onClick={this.showModal}>
          {" "}
          <i class="fas fa-envelope" />
          open
        </button>
      </div>
    )
  }
}
