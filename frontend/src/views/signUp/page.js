import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  {Field} from 'redux-form';
import Input from '../../components/input';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({onSubmit, errorMessage}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate method="post" onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Field
                  name="firstName"
                  type="text"
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  autoComplete="fname"
                  autofocus
                  component={Input}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                variant="outlined"
                type="text"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                component={Input}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                type="text"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                component={Input}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                component={Input}
              />
            </Grid>
            {errorMessage ? 
              <Grid item xs={12}>
                {errorMessage}
              </Grid> : null
            }
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link className={classes.link} to="/signIn" variant="body2">
                  Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


