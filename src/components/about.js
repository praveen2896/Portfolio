import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { MDBIcon } from "mdbreact"
import PropTypes from "prop-types"
import React from "react"
import Image6 from "../images/profile.jpg"
import "./about.css"
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}

const MediaCard = props => {
  const { classes } = props
  return (
    <div className="Maincard">
      <div className="cards">
        <Card className="card1">
          <CardMedia
            className="media"
            image={Image6}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography align="center" gutterBottom variant="h5" component="h2">
              PraveenKumar
            </Typography>
            <Typography gutterBottom component="h1">
              Working as a Project Engineer 💻 in{" "}
              <strong>Wipro Technologies </strong>
              🌻
            </Typography>
            <Typography>Experience:1 years 7 months</Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary">
              <a
                href="https://twitter.com/lucifierpraveen"
                target="_blank"
                className="p-2 fa-lg w-ic"
              >
                <MDBIcon fab icon="twitter" />
              </a>
            </Button>
            <Button size="small" color="primary">
              <a
                href="mailto:mpraveenkumarown@gmail.com"
                target="_blank"
                className="p-2 fa-lg w-ic"
              >
                <MDBIcon icon="envelope" />
              </a>
            </Button>
            <Button>
              <a
                href="http://github.com/praveen2896"
                target="_blank"
                className="p-2 fa-lg w-ic"
              >
                <MDBIcon fab icon="github" />
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="cards2">
        <Card className="card1">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              PraveenKumar
            </Typography>
            <Typography component="p">
              Hi 👋 ! I am Praveeen ,I love trying innovative idea via websites
              in freetime and as a professional i am trying to explore Spring 🌱
              microservices
            </Typography>
          </CardContent>
          <CardContent>
            <Typography component="p">
              I Am also a Traveller 🌲 as well as a Nature Lover 🏝️, More
              Recently i am addicted to React js as well as Gatsby js
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              I am planning to start a Blog along with My new site
              iampraveen.netlify.com which is already you are in 😍
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>Happy Coding!👍</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaCard)
