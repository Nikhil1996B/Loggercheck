import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Footer from '../../components/Footer/footer';
import HeaderComp from '../../components/Header/headercomponent';
import parse from 'html-react-parser';
import { staticPageActions } from '../../actions/staticpageactions';
import ShowMoreText from 'react-show-more-text';
import { tos, privacy, about } from '../../services/config';
import { useLocation } from 'react-router-dom';
import { LoadingSkeltonTemplate } from './loadingskeleton';
import './style.scss';
import { pathOr } from 'ramda';

function StaticInformation() {
    // const [htmlContent, sethtmlContent] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    // const themes = useSelector(state => pathOr(null, ['ThemeState'])(state));
    const content = useSelector(state =>
        pathOr(null, ['StaticContentReducer', 'result', 'result', 'components', '0', 'content', 'data'])(state));
    const pageName = useSelector(state => pathOr(null, ['StaticContentReducer', 'result', 'result', 'pageName'])(state));
    const loading = useSelector((state) => pathOr(null, ['StaticContentReducer', 'loading'])(state))
    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    useEffect(() => {
        if (location.pathname.toLowerCase().includes('terms')) {
            dispatch(staticPageActions.getTermsOfService(tos.pattern));
        }
        else if (location.pathname.toLowerCase().includes('about')) {
            dispatch(staticPageActions.getTermsOfService(about.pattern));
        } else if (location.pathname.toLowerCase().includes('privacy')) {
            dispatch(staticPageActions.getTermsOfService(privacy.pattern));
        }
        return () => {
        }
    }, []);

    if (loading) {
        return <LoadingSkeltonTemplate />;
    }
    return (
        <>
            {pageName ?
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{pageName}</title>
                    <link rel="" href="/terms-of-service" />
                </Helmet>
                : null}
            <main className="staticpage-background" style={{}}>
                <header aria-label="main header section">
                    <HeaderComp />
                </header>
                <section>
                    {
                        content && <div className="container">
                            <ShowMoreText
                                /* Default options */
                                lines={60}
                                more='Show more'
                                less='Show less'
                                className='content-css'
                                anchorClass='my-anchor-css-class'
                                onClick={executeOnClick}
                                expanded={false}
                            >
                                {parse(content)}
                            </ShowMoreText>
                        </div>
                    }
                </section>

            </main>
            <Footer />
        </>
    )
}

export default StaticInformation;