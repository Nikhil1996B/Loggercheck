import React, { useState } from "react";
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Hamburger from "../../assets/images/hamburger.png";
import Player from "../../components/Player/Player";
import HeaderComp from "../../components/Header/headercomponent";
import Footer from "../../components/Footer/footer";
import "./VideoPage.css";

function VideoPage() {
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    let source = {
        sources: [{
            // src: "https://d1gnaphp93fop2.cloudfront.net/videos/5fb40b3d97d6b12d9641614c/mp4/_1080.mp4",
            // type: "application/x-mp4",
            // src: "https://cpaas-tentkotta-private.s3-us-west-2.amazonaws.com/5f7ca5c90b5993346840cdc2/m3u8/master.m3u8",
            src: "https://d1gnaphp93fop2.cloudfront.net/videos/5fb40b3d97d6b12d9641614c/m3u8/master.m3u8",
            type: "application/x-mpegurl"
        }]
    };

    return (
        <>
            <main className="SignUp-background">
                <header aria-label="main header section on sign in page">
                    <HeaderComp />
                </header>
                {/* {false ? <div>
                <SideNav ></SideNav>
                <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
                <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
            </div> : null} */}
                <div>
                    <Player source={source} onPlay={() => { console.log("The player has started playing.") }} />
                </div>
            </main>
            <Footer />
        </>
    )
}

export { VideoPage };