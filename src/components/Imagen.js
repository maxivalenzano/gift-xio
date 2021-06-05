import React, { useState, useEffect } from 'react';

import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Image = () => {
    const classes = useStyles();
    const [images, setImages] = useState(null)

    useEffect(() => {
        let shouldCancel = false
        const call = async () => {
            const response = await axios.get("https://google-photos-album.herokuapp.com/TmNiEosMFuMkqrwN8")
            if (!shouldCancel && response.data && response.data.length > 0) {
                setImages(response.data.map(url => ({
                    original: `${url}=w1024`,
                    thumbnail: `${url}=w100`
                })))
            }
        }
        call()
        return () => shouldCancel = true
    }, [])
    return images ?
        <ImageGallery items={images} lazyLoad={true} autoPlay={true} slideInterval={4000} showThumbnails={false} thumbnailPosition={"bottom"} startIndex={1} />
        :
        <div className={classes.root}>
            <CircularProgress color="primary" />
        </div>
}
export default Image
