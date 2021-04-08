import React, { useEffect, useState } from 'react';
import bbd from "./images/bbd.jpg";

import './style.scss';


function VideoPreview({ config, videoConfigStyle, displayposter = false, id }) {

    const [enableAutoPlayDelay, setAutoPlayinterval] = useState(true);

    // const stopMovie = (e) => {
    //     console.log('off');
    // }

    // const playMovie = (e) => {
    //     console.log('on');
    // }

    // useEffect(() => {
    //     setAutoPlayinterval(true);
    //     let timer;
    //     if (enableAutoPlayDelay) {
    //         timer = setTimeout(function () {
    //             document.getElementById("playvideo").play();

    //         }, 5000);
    //     }
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [])

    const defaultStyle = {
        // position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        transform: "translate(-50%, -50%)",
        zIndex: "1"
    };
    return (
        <div className="video-container">
            <video
                poster={displayposter ? bbd : ''}
                autoPlay
                // onMouseOver={(e) => e.target.play()}
                loop
                controls
                controlsList="nofullscreen nodownload noremoteplayback"
                disablePictureInPicture
                muted
                // onMouseOut={(e) => e.target.pause()}
                style={videoConfigStyle ? { ...videoConfigStyle } : { ...defaultStyle }}
                id={id ? id : "playvideo"}
            >
                <source src={config.url ? config.url :
                    "https://giant.gfycat.com/VerifiableTerrificHind.mp4"}
                    type="video/mp4" />
            </video >
        </div>
    )
}

export default VideoPreview;