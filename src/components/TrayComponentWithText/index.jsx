import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';
import Home from '../Carousel/Home';
import { getByGenrer } from '../Carousel/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';
import useWindowSize from "../../helpers/viewport";

require('./style.scss')

function TrayComponentText({
    filterAvailable = false,
    title = '',
    progressBar,
    disPlayContent = {
        header: 'Popular movies to watch now',
        content: 'Most watched movies by days'
    },
    viewAll = false,
    redirecturl }) {

    // media query display
    const display = useMediaQuery('(max-width: 564px)');
    const size = useWindowSize();

    const [movies, setMovies] = useState({ movies: [] })
    const trending = useSelector(state => pathOr([],
        ['HomepageState', 'pagecontent', 'trendingmovies', 'records'])(state));
    useEffect(() => {
        // clean up controller
        let isSubscribed = true;
        getByGenrer('Horror').then(res => isSubscribed ? setMovies({ ...movies, animationMovies: trending }) : null);
        return () => (isSubscribed = false)
    }, []);

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
                            <p><a href="#trayinfo"
                                aria-label={"navigate to tray section"}
                            >View all &nbsp; <span>&#62;</span></a></p>
                        </> : null
                    }
                </aside>
                <div className="popular-movies-mob">Popular movies to watch</div>
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
export default TrayComponentText