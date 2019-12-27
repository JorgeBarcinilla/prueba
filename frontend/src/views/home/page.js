import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Dialog from '../../components/dialog'
import  {Field} from 'redux-form';
import Input from '../../components/input';
import Select from '../../components/select';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import FaceIcon from '@material-ui/icons/Face';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home({onSubmitPelicula, onSubmitFuncion, errorMessage, movies}) {
  const classes = useStyles();
  console.log(movies);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Catalogo de peliculas
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Aqui encontraras las peliculas que en este momento estan en cartelera, puedes adquirir tu entrada en la que mas te guste.
            </Typography>
            {errorMessage ? 
                            <Grid item xs={12}>
                                {errorMessage}
                            </Grid> : null
                            }
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <Dialog showDialog={onSubmitFuncion} nameButton="Crear funcion" title="Formulario de creacion de funciones" errorMessage={errorMessage}>
                    <form noValidate method="post" onSubmit={onSubmitFuncion}>
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={12} sm={6}>
                                <Field
                                name="movie"
                                id="movie"
                                label="Nombre de la pelicula"
                                component="select"
                                >
                                  {movies.map(movie => (
                                    <option key={movie.id} value={movie.id}>
                                    {movie.movieName}
                                    </option>
                                  ))}
                                </Field>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Field
                                variant="outlined"
                                type="datetime-local"
                                id="dateMovie"
                                label=""
                                name="dateMovie"
                                autoComplete="dMovie"
                                component={Input}
                            />
                            </Grid>
                            <Grid item xs={6}>
                            <Field
                                variant="outlined"
                                type="number"
                                id="quotaMovie"
                                label="Cupo de la sala"
                                name="quotaMovie"
                                component={Input}
                            />
                            </Grid>
                            <Grid item xs={6}>
                            <Field
                                variant="outlined"
                                name="siteMovie"
                                label="Lugar"
                                type="text"
                                id="siteMovie"
                                component={Input}
                            />
                            </Grid>
                            <Grid item xs={6}>
                            <Field
                                variant="outlined"
                                type="text"
                                id="addressMovie"
                                label="Direccion"
                                name="addressMovie"
                                component={Input}
                            />
                            </Grid>
                            {errorMessage ? 
                            <Grid item xs={12}>
                                {errorMessage}
                            </Grid> : null
                            }
                            <Grid item xs={12}>
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                >
                                    Crear funcion
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    </Dialog>
                </Grid>
                <Grid item>
                    <Dialog showDialog={onSubmitFuncion} nameButton="Agregar pelicula" title="Formulario de registro de peliculas" errorMessage={errorMessage}>
                        <form noValidate method="post" onSubmit={onSubmitPelicula}>
                            <Grid container spacing={2} justify="center">
                                <Grid item xs={12} sm={6}>
                                    <Field
                                    name="movieName"
                                    type="text"
                                    id="movieName"
                                    label="Pelicula"
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
                                    id="directorMovie"
                                    label="Director"
                                    name="directorMovie"
                                    autoComplete="dMovie"
                                    component={Input}
                                />
                                </Grid>
                                <Grid item xs={6}>
                                <Field
                                    variant="outlined"
                                    name="genderMovie"
                                    label="Genero"
                                    type="text"
                                    id="genderMovie"
                                    component={Input}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <Field
                                    variant="outlined"
                                    type="text"
                                    id="descrMovie"
                                    label="Descripcion"
                                    name="descrMovie"
                                    component={Input}
                                />
                                </Grid>
                                {errorMessage ? 
                                <Grid item xs={12}>
                                    {errorMessage}
                                </Grid> : null
                                }
                                <Grid item xs={12}>
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    >
                                        Agregar pelicula
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Dialog>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image=""
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                    <Divider variant="middle" />
                        <Grid container>
                            <Grid item>
                                <MovieFilterIcon/>
                                <Chip className={classes.chip} label="Genero" />
                            </Grid>
                            <Grid item>
                                <ScheduleIcon/>
                                <Chip className={classes.chip} label="Fecha inicio" />
                            </Grid>
                            <Grid item>
                                <LocationCityIcon/>
                                <Chip className={classes.chip} label="Lugar" />
                            </Grid>
                            <Grid item>
                                <LocationOnIcon/>
                                <Chip className={classes.chip} label="Direccion" />
                            </Grid>
                            <Grid item>
                                <FaceIcon/>
                                <Chip className={classes.chip} label="Cupo" />
                            </Grid>
                            
                        </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid container justify='center'>
                        <Grid item>
                            <Button size="small" color="primary">
                                Adquirir
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" color="primary">
                                Editar
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" color="primary">
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  );
}