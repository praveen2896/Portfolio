import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { MDBIcon } from "mdbreact"
import PropTypes from "prop-types"
import React from "react"
import "./about.css"
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}

const ContactPage = props => {
  const { classes } = props
  return (
    <div className="Maincard">
      <div className="cards2">
        <Card className="card1">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Contact Me 🧑
            </Typography>
            <Typography component="p">
              Hi 👋 ! , If you want to share anything , you can reach out me
              anytime ⌚ ,find my contact details below:
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              📱 : +919566398589 <br />
              📧: mpraveenkumarown@gmail.com
            </Typography>
          </CardContent>
          <CardContent>
            {" "}
            <Typography>
              Moreover Contact me on social Media also except Facebook 😂
              <i class="fa fa-facebook-official" aria-hidden="true" />
            </Typography>
          </CardContent>
          <CardContent>
            <Typography component="p">
              Note:
              <br />
              Soon i will update my Contact page like write feedback to me 🤟
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>Happy Coding!👍</Typography>
          </CardContent>
          .
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
    </div>
  )
}

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactPage)
