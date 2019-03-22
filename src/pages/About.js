import React, { Component } from "react"
import Layout from "../components/layout"
import MediaCard from "../components/about"

export default class About extends Component {
  render() {
    return (
      <Layout>
        <div>
          <MediaCard />
        </div>
      </Layout>
    )
  }
}
