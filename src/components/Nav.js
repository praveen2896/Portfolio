import { Link } from "gatsby"
import {
  MDBCollapse,
  MDBHamburgerToggler,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
} from "mdbreact"
import React, { Component } from "react"
import "./Nav.css"
import { MyContext } from "../context/provider"
import Modal from "../components/modal"

class NavbarPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => (
            <MDBNavbar color="indigo" dark expand="md">
              <MDBNavbarBrand style={{ color: "white" }} center={true}>
                <Link
                  to="/"
                  onClick={() => {
                    context.changeName("I am PraveenKumar")
                  }}
                >
                  <strong className="black-text">{context.profilename}</strong>
                </Link>

                {/* <strong className="black-text"> {this.state.name} </strong> */}
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#ffff"
                backgroundcolor="black"
                id="hamburger1"
                onClick={this.toggleCollapse}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav right>
                  <Link
                    to="/Home"
                    onClick={() => {
                      context.changeName("Home of PraveenKumar")
                    }}
                  >
                    <i class="fas  fa-home " />
                    Home
                  </Link>
                  <Link
                    to="/About"
                    onClick={() => {
                      context.changeName("About PraveenKumar")
                    }}
                  >
                    <i class="fas  fa-home " />
                    AboutMe
                  </Link>

                  <Link to="/Contact">
                    <i class="fas fa-envelope" /> ContactMe
                  </Link>

                  <Link to="/Contact">
                    <Modal />
                  </Link>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

export default NavbarPage
