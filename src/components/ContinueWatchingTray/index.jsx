import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { pathOr, equals } from 'ramda';
import Home from '../Carousel/Home';
import { getByGenrer } from '../Carousel/api/Movies';
import useWindowSize from '../../helpers/viewport';

import './style.scss';

function ContinueWatchingTray({
    filterAvailable = false,
    title = '',
    progressBar = true,
    disPlayContent = {
        header: 'Continue Watching',
        content: 'Start watching from where you left'
    },
    viewAll = false,
    redirecturl }) {

    // media query display
    const size = useWindowSize();

    const [movies, setMovies] = useState({ movies: [] });
    const trending = useSelector(state => pathOr([],
        ['HomepageState', 'pagecontent', 'trendingmovies', 'records'])(state));

    const signedInStatus = useSelector(state => pathOr('',
        ['userAuth', 'signInstatus', 'responseCode'])(state));
    const isSignedIn = equals(200, signedInStatus);

    useEffect(() => {
        // clean up controller
        let isSubscribed = true;
        getByGenrer('Romance').then(res => isSubscribed ? ({ ...movies, animationMovies: trending }) : null);
        return () => (isSubscribed = false)
    }, []);

    if (!isSignedIn) {
        return null;
    }
    return (
        <div>
            <section className="trayInfoWrapper trayinfowrappertext" id="#trayinfo">
                <aside className="content-section">
                    <hr style={{ width: '20%', position: 'absolute' }} />
                    {
                        disPlayContent && disPlayContent.header && <h1 className={'textSplitter'}>
                            {disPlayContent.header}
                        </h1>
                    }
                    {disPlayContent && disPlayContent.content && <p>{disPlayContent.content}</p>}
                    {
                        viewAll ? <>
                            <hr />
                            <p><a href="#trayinfo">View all &nbsp; <span>&#62;</span></a></p>
                        </> : null
                    }
                </aside>
                <div className="popular-movies-mob">Continue Watching</div>
                <aside className="slider-width">
                    <Home
                        progressBar={progressBar}
                        movies={trending}
                        title={title}
                        displayCard={pathOr(768, ["width"])(size) < 546 ? 3 : 6}
                        redirecturl={redirecturl}
                        displayHoverState={true}
                        smallsize={true}
                    />
                </aside>
            </section>
        </div>
    )
}
export default ContinueWatchingTray