import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { cardetailsstyle } from "./plandetailsstyle";
import CancelMembership from "../CancelMembership/cancelmembership";

export default function Plandetailssection() {
  const [showCancelMembershipNav, setUpdateMembershipShowNav] = useState(false);

  const handleCancelMembership = (value) => {
    setUpdateMembershipShowNav(value);
  };
  const history = useHistory();
  return (
    <ListGroup style={{ borderBottom: "0.5px solid #E4E4E4" }}>
      <ListGroup.Item
        style={{
          color: "#585858",
          fontSize: "23px",
          fontWeight: "500",
          border: "0",
          padding: "0.5rem",
          background: "#F5F5F5",
        }}
      >
        {`Plan Details`}
      </ListGroup.Item>
      <ListGroup.Item style={cardetailsstyle.background()}>
        <div
          className="float-left"
          style={{
            fontSize: "15px",
            color: "#585858",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          annual
        </div>
        <div
          className="float-right"
          style={{
            color: "#0D7EFF",
            fontSize: "12px",
            fontWeight: "400",
            textTransform: "capitalize",
          }}
          onClick={() => history.push("/changeplan")}
        >
          change plan
        </div>
      </ListGroup.Item>
      <ListGroup.Item style={cardetailsstyle.background()}>
        <div
          className="float-left"
          style={{
            fontSize: "15px",
            color: "#585858",
            background: `#E4E4E4 0% 0% no-repeat padding-box`,
            padding: "0.5rem",
            marginBottom: "1rem",
          }}
          onClick={() => handleCancelMembership(true)}
        >
          Cancel Membership
        </div>
        <>
          <CancelMembership
            showCancelMembershipNav={showCancelMembershipNav}
            setUpdateMembershipShowNav={setUpdateMembershipShowNav}
            handleCancelMembership={handleCancelMembership}
          />
        </>
      </ListGroup.Item>
    </ListGroup>
  );
}
