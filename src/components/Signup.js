import React from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import IconButton from "@material-ui/core/IconButton";
// import Input from "@material-ui/core/Input";
// import FilledInput from "@material-ui/core/FilledInput";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import {
//   createMuiTheme,
//   withStyles,
//   makeStyles,
//   ThemeProvider,
// } from "@material-ui/core/styles";
// import clsx from "clsx";

import { userActions } from "../_actions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // paddingTop: 120,
    width: "100%", // Fix IE 11 issue.
    // marginBottom: theme.spacing(5),
    marginTop: theme.spacing(10),
    // marginLeft: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#B66FD3",
  },
  formBody: {
    // paddingBottom: 120,
    // padding: theme.spacing(10),
    backgroundColor: "white",
    alignself: "center",
    width: "100%",
  },
  text: {
    // paddingTop: 20,
  },
  text1: {
    // paddingTop: 15,
  },
});

const BootstrapButton = withStyles({
  root: {
    // width: 50,
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    // lineHeight: 1.5,
    backgroundColor: "#B66FD3",
    borderColor: "#B66FD3",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#B66FD3",
      borderColor: "#B66FD3",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#B66FD3",
      borderColor: "#B66FD3",
    },
    "&:focus": {
      boxShadow: "0#B66FD3",
    },
  },
})(Button);

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
        phoneNumber: "",
      },
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#B670D3";
  }
  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.email && user.password && user.phoneNumber) {
      this.props.register(user);
    }
  }

  render() {
    const { classes } = this.props;
    const { registering } = this.props;
    const { user, submitted } = this.state;

    console.log(this.state);
    return (
      <Container className={classes.formBody} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
          <Typography className={classes.text} component="h1" variant="h5">
            Create your account
          </Typography>
          <Typography className={classes.text1} component="label" variant="p">
            All your advertising needs met in one place
          </Typography>

          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleSubmit}
          >
            {/* <label</label> */}

            <TextField
              variant="outlined"
              email
              margin="normal"
              required
              fullWidth
              // id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.user.email}
              onChange={this.handleChange}
            />
            {submitted && !user.email && (
              <div className="help-block">Email Name is required</div>
            )}

            {/* // /* <FormControlLabel
            //   label="Secondary"
            //   // value="top"
            //   labelPlacement="top"
            //   control={
            //     <TextField
            //       variant="outlined"
            //       margin="normal"
            //       required
            //       fullWidth
            //       id="email"
            //       label="Email Address"
            //       name="email"
            //       autoComplete="email"
            //       autoFocus
            //       value={user.email}
            //       onChange={this.handleChange}
            //     />
            //   }
            // /> */}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.user.password}
              onChange={this.handleChange}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="Password"
              type="password"
              id="password"
              value={this.state.user.phoneNumber}
              onChange={this.handleChange}
              autoComplete="current-password"
            />

            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="black"
              // backgroundColor="#B66FD3"
              className={classes.submit}
            >
              log in
            </Button> */}

            <BootstrapButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              // disableRipple
              // className={classes.margin}
            >
              Get started.{" "}
            </BootstrapButton>
            {registering && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}
            <Grid container direction="column">
              <Grid item xs>
                <Typography
                  component="label"
                  variant="p"
                  style={{ fontSize: 10 }}
                >
                  By signing up, you agree to ProjectNairon's
                  <Link href="#" variant="p">
                    {" "}
                    Terms of Service and
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component="label"
                  variant="p"
                  style={{ fontSize: 10 }}
                >
                  Already Signed Up?{" "}
                  <Link href="#" variant="p">
                    {" "}
                    {"Log in"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      // </Container>
    );
  }
}
// export default withStyles(styles, { withTheme: true })(SignUp);
function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(SignUp);
export default withStyles(styles, { withTheme: true })(connectedRegisterPage);
