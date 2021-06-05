import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// const raleway = {
//   fontFamily: 'Filxgirl',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Filxgirl'),
//     url(${Filxgirl}) format('ttf')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };


// const theme = createMuiTheme({
//     typography: {
//       h4: {
//         fontSize: 48,
//         fontStyle: 'Filxgirl',
//       },
//     },
//     overrides: {
//       MuiCssBaseline: {
//         '@global': {
//           '@font-face': [raleway],
//         },
//       },
//     },
//   });

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>


        <Typography
          component="h2"
          variant="h4"
          color="primary"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          >
          Xioanara💕 Maximiliano
        </Typography>

      </Toolbar>
    </React.Fragment>
  );
}
