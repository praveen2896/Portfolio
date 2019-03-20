import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import React from "react"
import Age from "../components/birth"
import Image5 from "../images/HTML2.png"
import Image3 from "../images/JavaImg.png"
import Image2 from "../images/Node2.png"
import Image1 from "../images/ReactImg.png"
import Image4 from "../images/spring-boot.png"
import Image6 from "../images/profile.jpg"
import Image7 from "../images/javascript.png"
import ModalPage from "../components/contact"
import Modal from "../components/modal"
import "./Home.css"

const bigAvatar = {
  // margin: 10,
  width: 200,
  height: 200,
}

const Home = () => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src={Image6} style={bigAvatar} />
        <strong className="name">
          {" "}
          Hi I am PraveenKumar .<br />I Love Travelling and Building websites{" "}
          <br />
          <Age />
        </strong>
      </Grid>
      <Grid container justify="center" alignItems="center" />
      <div
        className="skills-description"
        style={{ color: "aqua", paddingTop: "25px" }}
      >
        My Skills
      </div>
      <Grid container justify="left" alignItems="center" className="Avatar1">
        <Avatar alt="Remy Sharp" src={Image3} />
        <Avatar alt="Remy Sharp" src={Image4} />
        <Avatar alt="Remy Sharp" src={Image7} />
        <Avatar alt="Remy Sharp" src={Image1} />
        <Avatar alt="Remy Sharp" src={Image2} />
        <Avatar alt="Remy Sharp" src={Image5} />

        {/* <div className="movie-card">
          <div
            className="skills-image"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          />
          <div className="skills-description" style={{ color: "aqua" }}>
            React Js
          </div>
        </div> */}
      </Grid>
      {/* <ModalPage />
      <Modal /> */}
    </div>
  )
}

export default Home
