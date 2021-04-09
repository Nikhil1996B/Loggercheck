import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import left from "./icons/left-chevron.svg";
import right from "./icons/right-chevron.svg";
import { CarousalStyle } from "./movicardstyle";

const Carousel = ({ title = "", style, children, displayCard = 5 }) => {
  const [activeItemIndex, setActiveIndex] = useState(1);
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
