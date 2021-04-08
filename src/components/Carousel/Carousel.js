import React, { Component, useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import left from "./icons/left-chevron.svg";
import right from "./icons/right-chevron.svg";
import { CarousalStyle } from "./movicardstyle";
import { pathOr } from "ramda";
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

const Carousel = ({ title = "", style, children, displayCard = 5 }) => {
  const [activeItemIndex, setActiveIndex] = useState(1);
  const size = useWindowSize();
  function changeActiveItem(activeItemIndex) {
    setActiveIndex(activeItemIndex);
  }
  // media query display
  const iconStyle = {
    width: "44px",
    height: "76px",
  };
  const marginLeft = {
    marginLeft: "3rem",
  };

  const marginRight = {
    marginRight: "3rem",
  };
  return (
    <>
      <CarousalStyle />
      <section className="carousel-container">
        {title && (
          <div
            className="carousel-title"
            style={style && style.displayMode ? style.displayMode : {}}
          >
            {title}
            {style && <hr className="horzontal-fill" />}
          </div>
        )}
        <div className="carousel-content">
          <ItemsCarousel
            // Placeholder configurations
            enablePlaceholder
            numberOfPlaceholderItems={5}
            minimumPlaceholderTime={1000}
            placeholderItem={
              <div style={{ height: 250, background: "#202020" }}></div>
            }
            // Carousel configurations
            numberOfCards={displayCard}
            gutter={22.5}
            showSlither={false}
            firstAndLastGutter={true}
            freeScrolling={true}
            // Active item configurations
            requestToChangeActive={changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={"center"}
            chevronWidth={24}
            rightChevron={
              <img
                src={right}
                style={{ ...iconStyle, ...marginLeft }}
                alt="right chevron"
              />
            }
            leftChevron={
              <img
                src={left}
                style={{ ...iconStyle, ...marginRight }}
                alt="left chevron"
              />
            }
            outsideChevron={false}
          >
            {children}
          </ItemsCarousel>
        </div>
      </section>
    </>
  );
};

export { Carousel };
