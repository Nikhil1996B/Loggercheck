import React from "react";
import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";

export const SearchResultsListLayout = () => {
  // const themeObj = useSelector((state) => pathOr(null, ['ThemeState', 'layout'])(state));
  const themes = useSelector((state) => pathOr("", ["ThemeState"])(state));
  const themeName = pathOr("default", ["themeName"])(themes);
  const bgcolor = useSelector((state) =>
    pathOr("#131722", ["ThemeState", "colors", "bgColor", "color", "value"])(
      state
    )
  );
  return (
    <>
      <Global
        styles={css`
        body,
        html {
          height: initial !important;
          background: ${bgcolor} !important;
        }
                    body{
                    .${themeName}-Search-Results-Page {
                        .movie-list-container {
                            margin: 0px 20px 20px 20px;
                            .filter-btn {
                                background-color: #2f323c;
                                padding: 10%;
                            }
                            .navbar-input-container {
                                height: 90px;
                                width: 100% !important;
                                background: #f5f5f51f 0% 0% no-repeat padding-box;
                            }
                            .navbar-input {
                                width: 100%;
                                margin: 0 !important;
                            }
                            .navbar-input {
                                font: normal normal normal 25px/38px Inter;
                                letter-spacing: 0px;
                                color: #949cb0;
                                img {
                                    left: 82%;
                                }
                            }
                            .navbar-input input{
                                padding-left: 10%;
                            }
                        }
                        .movie-list-container aside nav {
                            width: 50%;
                        }
                        .movie-list-container h1 {
                            font: normal normal normal 25px;
                            font-size: 25px !important;
                            letter-spacing: 0px;
                            color: #ffffff;
                            margin: 0;
                        }
                        .movie-list-grid {
                            list-style-type: none;
                            padding: 0;
                            margin: 0;
                        
                            display: flex;
                            justify-content: flex-start;
                            flex-wrap: wrap;
                        }
                        .movie-list-grid li {
                            padding: 10px 15px;
                            text-align: left;
                            width: 30%;
                        }
                        .movie-list-filter-wrapper {
                            margin-top: 3%;
                            max-width: 95%;
                        }
                        .movie-list-content-wrapper{
                            max-width: 95%;
                        }
                 }
                 .${themeName}-Search-Results-Page .movie-list-container .navbar-input input {
                    width: 100% !important;
                }
                
                 @media all and (orientation: landscape) and (min-width: 568px ) and (max-width: 1024px) {
                    .${themeName}-Search-Results-Page .movie-list-container .movie-list-grid li {
                        width: 32% !important;
                    }
                    .${themeName}-Search-Results-Page .filterbtnwrapper {
                        width: 20% !important;
                    }
                    .${themeName}-Search-Results-Page .filter-btn {
                        height: 63%;
                        margin-left: 1rem;
                    }
                    .${themeName}-Search-Results-Page .filter-btn img {
                        height: 40px !important;
                    }
                .${themeName}-Search-Results-Page .movie-list-container .navbar-input img {
                }
                    .navbar-input-container {
                        margin-bottom: 0;
                    }
                    .${themeName}-Search-Results-Page 
                    .movie-list-container 
                    .navbar-input ::-webkit-input-placeholder {
                        font-size: 10px !important;
                        padding-left: 0!important;
                }  
                     .${themeName}-Search-Results-Page .configfilter {
                            font-size: 14px !important;
                        margin-top: 1rem;
                     }
                     .${themeName}-Search-Results-Page .filterbtnwrapper {
                        width: 40% !important;
                    }
                    .${themeName}-Search-Results-Page .filter-btn img {
                        height: 20px !important;
                        margin-top: 1rem;
                    }
                    .${themeName}-Search-Results-Page .moviescardtitle .card-body {
                        font-size: 24px !important;
                        padding: 0 !important;
                        margin: -20px 1rem;
                    }
                    .${themeName}-Search-Results-Page .movie-list-container .navbar-input-space {
                        width: 120%
                    }
                 }
                 @media screen and (width: 768px ){
                    .${themeName}-Search-Results-Page .filter-btn {
                        height: 63%;
                        margin-left: 5rem;
                    }
                }
                `}
      />
    </>
  );
};

export default SearchResultsListLayout;
