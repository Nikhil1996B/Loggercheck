import React from "react";
import { Global, css } from "@emotion/react";
import { pathOr } from "ramda";
import { useMediaQuery } from "../Header/viewportHook";

export const MyListLayout = () => {
  // const themeObj = useSelector((state) => pathOr(null, ['ThemeState', 'layout'])(state));

  return (
    <>
      <Global
        styles={css`
                body,
                html {
                    height: initial !important;
                    background: #131722 !important;
                }
                    body{
                    .tentkotta-my-list-Page {
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
                            }
                            .navbar-input {
                                font: normal normal normal 25px/38px Inter;
                                letter-spacing: 0px;
                                color: #949cb0;
                                img {
                                    left: 82%;
                                }
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
                 }

                 .mylist-card-body{
                    border: none;
                    border-radius: 0;
                    width: 100%;
                    margin: 2rem 0;
                 }
                 .mylist-card-title {
                    width: 100%;
                    background: #131722;
                    color: "white",
                    fontSize: 32px;
                    border: none;
                    border-radius: 0;
 
                 }

                 .mylist-image-container {
                     height: 33px;
                     width: 33px;
                     margin-right: 1%;
                 }

                 .mylist-section-title {
                    color: white;
                 }

                 @media screen and (min-width: 1200px) {
                    .mylist-movie-list-container {
                        max-width: 95%;
                    }
                 }

                 @media screen and (width: 768px ) {
                    .headerv1-logo {
                        width: 22%;
                    }
                    .navbar-input img {
                        width: 19%;
                    }
                 }

                 @media screen and (max-width: 456px) {
                    .mylist-card-title {
                     fontSize: 32px;
                        margin: 0;
                        padding: 0;
                    }
                    .mylist-image-container{
                        height: 18px;
                        width: 18px;
                    }
                 }
                `}
      />
    </>
  );
};

export default MyListLayout;
