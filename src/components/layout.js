/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavbarPage from "../components/Nav"
import "./layout.css"
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <NavbarPage />
        <div
          className="parallax"
          style={{
            margin: `0 auto`,
            maxWidth: "100%",
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>

        <footer style={{ backgroundColor: "indigo", color: "white" }}>
          <div
            className="Links"
            style={{ paddingTop: "15px", paddingRight: "50px" }}
          >
            <ul className="list-inline text-right list-unstyled ulist">
              <li className="list-inline-item twitter">
                <a
                  href="https://twitter.com/lucifierpraveen"
                  target="_blank"
                  className="p-2 fa-lg w-ic"
                >
                  <MDBIcon fab icon="twitter" />
                </a>
              </li>
              <li className="list-inline-item Mail">
                <a
                  href="mailto:mpraveenkumarown@gmail.com"
                  target="_blank"
                  className="p-2 fa-lg w-ic"
                >
                  <MDBIcon icon="envelope" />
                </a>
              </li>
              <li className="list-inline-item Github">
                <a
                  href="http://github.com/praveen2896"
                  target="_blank"
                  className="p-2 fa-lg w-ic"
                >
                  <MDBIcon fab icon="github" />
                </a>
              </li>
            </ul>
          </div>
          <div className="copyrights" style={{ textAlign: "center" }}>
            © {new Date().getFullYear()},Copyright : Designed By{" "}
            <a href="https://www.gatsbyjs.org">Me</a>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
