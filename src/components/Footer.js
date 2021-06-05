import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const theme2 = createMuiTheme({
//     typography: {
//         fontFamily: [
//             'Filxgirl',
//             'caveat',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             '-apple-system',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',],
//         h3: {
//             fontFamily: 'caveat',
//             fontSize: 48,
//             fontStyle: 'caveat',
//         },
//         subtitle2: {
//             fontFamily: 'caveat',
//             fontSize: 28,
//             fontStyle: 'caveat',
//         },
//     },
// });


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: 'rgba(143, 143, 143, 0.2)',
        marginTop: theme.spacing(8),
        padding: theme.spacing(1, 0),
    },
    text1: { color: '#3f51b5', fontSize: 30, fontFamily: 'Coronetscript, cursive' }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <div style={{ textAlign: 'center' }}>

                    <p className={classes.text1}>
                        Album de Fotos
        </p>
                    <p style={{ color: '#fff', fontSize: 24, fontFamily: 'Zapf Chancery, cursive' }}>
                        Xionara ♡ Maximiliano
                </p>
                </div>
            </Container>
        </footer>
    );
}
