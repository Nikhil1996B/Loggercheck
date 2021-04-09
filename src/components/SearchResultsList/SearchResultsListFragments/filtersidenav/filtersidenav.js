import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import SideNav from "react-simple-sidenav";
import Filter from "../Filters";
import filter from "../../assets/filter.svg";
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const FilterSidenavBar = () => {
  const [showNav, setShowNav] = useState();
  return (
    <>
      <Col lg={2} md={4} sm={2} className="filterbtnwrapper">
        <Row
          className={"filter-btn"}
          onClick={() => setShowNav(true)}
          style={{ borderRadius: "5px" }}
        >
          <Image src={filter} thumbnail alt={"Thumbnail"} />
          <span
            style={{
              fontSize: `36px`,
              letterSpacing: `0.3px`,
              paddingLeft: "4%",
              paddingRight: "0",
              color: `#FFFFFF`,
            }}
            className="configfilter"
            css={{
              [mq[0]]: {
                fontSize: "",
              },
            }}
          >
            {"Filter"}
          </span>
        </Row>
      </Col>
      <div>
        <SideNav
          navStyle={{
            minWidth: "50%",
            minHeight: "100%",
            height: "auto",
            backgroundColor: "#131722",
            padding: "0 2%",
          }}
          showNav={showNav}
          onHideNav={() => setShowNav(false)}
          titleStyle={{ backgroundColor: "#4CAF50" }}
          itemStyle={{ backgroundColor: "#131722", padding: "0 2%" }}
          openFromRight={true}
          itemHoverStyle={{ backgroundColor: "#CDDC39" }}
        >
          <Filter setShowNav={setShowNav} />
        </SideNav>
      </div>
    </>
  );
};
