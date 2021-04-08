import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
// import { jsx, css } from '@emotion/react';
// import Search from '../../UI_Frontendlib/molecules/Search';
// import NavBarComponent from '../searchBar/NavBar';
import { useMediaQuery } from './viewportHook';
import { pathOr, equals } from 'ramda';
import { getCookie, deleteCookie } from '../../helpers/authentication';
import { HeaderContext } from './header-context';
import Brandlogo from './HeaderFragments/BrandLogo/brandlogo';
import Category from './HeaderFragments/Categories/Category';
import SearchForm from './HeaderFragments/SearchFormControl/searchform';
import { NavBarStyle } from './header-style';
import logotent from './assets/logotent.png';
import profile from './assets/profile.svg';
import { signinActions } from '../../actions/signinactions';
import { analyticsService } from '../../services/analyticsapi.service';
import { HeaderGlobalStyle } from './header-style';
import { HeaderConfiguration } from './header-signin-config';
// import react-bootstrap components
import { Navbar } from 'react-bootstrap';


export default function HeaderComp() {
    const header_user_config = HeaderConfiguration();

    // media query display
    const breakpoint = {
        sm: useMediaQuery('(max-width: 576px)'),
        md: useMediaQuery('(max-width: 768px)'),
        lg: useMediaQuery('(min-width:1200px')
    };

    // React redux dispatcher and selectors
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    // State Selectors
    const usernameCookie = getCookie('username');
    const themes = useSelector(state => pathOr(null, ['ThemeState'])(state));
    const themename = pathOr('default', ['themeName'])(themes);
    const emailAddress = useSelector(state => pathOr(usernameCookie ? usernameCookie : '',
        ['userAuth', 'emailaddress', 'username'])
        (state));
    const [displaysearch, setDisplaySearch] = useState(false)
    const [displaycategories, setdisplaycategories] = useState(false)
    // header layout
    const headerLayout = pathOr({}, ['layout', 'header'], themes);
    const { bgColor: headerbgclr } = headerLayout;
    const signedInStatus = useSelector(state => pathOr('',
        ['userAuth', 'signInstatus', 'responseCode'])(state));
    const isSignedIn = equals(200, signedInStatus);
    // logo - currying technique
    const logo = pathOr('', ['logoImg'])(themes);
    // const displayLogo = pathOr(false, ['logo'])(headerLayout);
    const account = pathOr('', ['icons', 'account'])(themes);
    const icons = pathOr('', ['icons'])(themes);

    // Destructure the theme props 
    const {
        primaryBtnColor: primBtCol,
        primaryFontColor: pFontClr,
        secondaryFontColor: sFontClr
    } = pathOr({}, ['colors'], themes);

    // Avatar icon click 
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (location.pathname == '/' || location.pathname.toLowerCase().includes('home')) {
            setDisplaySearch(true)
            setdisplaycategories(true)
        }
        else if (location.pathname.toLowerCase().includes('contentdetails')) {
            setDisplaySearch(true)
            setdisplaycategories(true)
        } else if (location.pathname.toLowerCase().includes('search')) {
            setDisplaySearch(true)
            setdisplaycategories(true)
        }
        else if (location.pathname.toLowerCase().includes('mylist')) {
            setDisplaySearch(true)
            setdisplaycategories(true)
        }
        return () => {
        }
    }, []);

    const useraction = async (isSignedIn, url, currenturl) => {
        if (isSignedIn) {
            await analyticsService.addeventanalytics('logout', '');
            await dispatch(signinActions.signout());
            dispatch(signinActions.resetSignInParams());
            dispatch({ type: 'RESET_SUBSCRIPTION' });
            deleteCookie('signInStatus');
            deleteCookie('username');
            dispatch({ type: 'RESET_SIGIN' });
        }

        if (currenturl && (currenturl.toLowerCase().includes('home')
            || currenturl.toLowerCase().includes('signup'))) {
            dispatch({ type: 'RESET_SIGIN' });
        }
        return history.push(url);
    }

    // Sign In navigator or Sign out action
    const handleSignInClick = (url, currenturl) => {

        switch (currenturl) {
            case '/home':
            case '/accountdetails':
            case '/streamingdetails':
            case '/activatedevice':
            case '/billingdetails':
            case '/paymentoptions':
            case '/cardcheckout':
            case '/membership':
            case '/changeplan':
            case '/success':
            case '/mylist':
            case '/search':
            case '/contentdetails':
                return useraction(isSignedIn, url, currenturl);
            default:
                return history.push(url);
        }
    }

    const HeaderContextState = {
        header_user_config,
        logotent,
        logo,
        themes,
        themename,
        usernameCookie,
        breakpoint,
        handleSignInClick,
        emailAddress,
        isSignedIn,
        dispatch,
        history,
        icons,
        category: {
            style: `${pFontClr}`
        },
        button: {
            style: `${primBtCol}`
        },
        profile,
        setShow,
        show,
        displaysearch,
        displaycategories
    }
    return (
        <HeaderContext.Provider
            value={HeaderContextState}>
            <>
                <HeaderGlobalStyle
                />
                <Navbar
                    varient={"dark"}
                    style={NavBarStyle(headerbgclr)}
                    expand={true}
                    className={'headercomp'}
                    data-test="headercomponent"
                >
                    <Brandlogo />
                    <Category />
                    <SearchForm />
                </Navbar>
            </>
        </HeaderContext.Provider>
    )
}
