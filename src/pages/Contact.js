import React, { Component } from "react"
import Layout from "../components/layout"
import ContactPage from "../components/contact"

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <div>
          <ContactPage />
        </div>
      </Layout>
    )
  }
}
