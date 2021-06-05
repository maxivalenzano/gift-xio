import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import imag from '../assets/photo.jpg'

// const raleway = {
//   fontFamily: 'Filxgirl',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 800,
//   src: `
//     local('Filxgirl'),
//     url(${Filxgirl}) format('ttf')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Filxgirl',
        'BlinkMacSystemFont',
        '"Segoe UI"',
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',],
      subtitle1: {
        fontSize: 30,
      },
      h5: {
        fontSize: 48,
        fontStyle: 'Filxgirl',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={imag} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container justify="flex-end" alignItems="flex-start">
        <Grid item>
          <div className={classes.mainFeaturedPostContent} style={{height:250}}>
            <ThemeProvider theme={theme}>
            {/* <Typography component="h2" variant="h5" color="inherit" gutterBottom align="right">
              {post.title}
            </Typography> */}
            <Typography variant="subtitle1" color="inherit" paragraph align="right">
              {post.description}
            </Typography>
            </ThemeProvider>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};