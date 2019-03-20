import React, { Component } from "react"
import Layout from "../components/layout"
import ModalPage from "../components/mreactmodal"

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>hi from Contact</h1>
          <ModalPage />
        </div>
      </Layout>
    )
  }
}
