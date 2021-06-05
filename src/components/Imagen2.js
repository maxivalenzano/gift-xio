import React, { useState, useEffect } from 'react';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Gallery from 'react-grid-gallery';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '500px',
        justifyContent: 'center',
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Images = () => {
    const classes = useStyles();
    const [images, setImages] = useState(null)



    // function detect2(URL, callback) {
    //     var image = new Image();
    //     image.src = URL;
    //     image.onload = function () {
    //         var height = image.height;
    //         callback(height);
    //     };
    // }

    // function detectW(URL, callback) {
    //     var image = new Image();
    //     image.src = URL;
    //     image.onload = function () {
    //         var height = image.height;
    //         callback(height);
    //         return height;
    //     };
    // };
    // function resultado(result) {
    //     var x = [{ y: 45 }];
    //     return (x)
    // };
    // const alto = []
    // const ancho = []
    // function getImgSize(imgSrc) {
    //     var newImg = new Image();

    //     newImg.onload = function () {
    //         var a = newImg.naturalWidth;
    //         var b = newImg.naturalHeight;
    //         // console.log({ a, b }, index)
    //         ancho.push(a);
    //         alto.push(b);
    //     }

    //     newImg.src = imgSrc; // this must be done AFTER setting onload
    // }
    useEffect(() => {
        let shouldCancel = false
        const call = async () => {
            const response = await axios.get("https://google-photos-album.herokuapp.com/TmNiEosMFuMkqrwN8")
            if (!shouldCancel && response.data && response.data.length > 0) {
                // response.data.map((img, index) => (
                //     getImgSize(`${img}=w200`, index)

                // ));
                setImages(response.data.map((url) => (
                    // console.log(alto),
                    // getImgSize(url),
                    {
                        src: `${url}=w1024`,
                        thumbnail: `${url}=w200`,
                        thumbnailWidth: 0,
                        thumbnailHeight: 0,
                        caption: 'La más hermosa luego💕'
                    }
                )))
            }
        }
        call()
        return () => shouldCancel = true
    }, [])
    return images ?

        <Gallery images={images} enableImageSelection={false} backdropClosesModal={true} />

        :
        <div className={classes.root}>
            <CircularProgress color="primary" />
        </div>
}
export default Images
