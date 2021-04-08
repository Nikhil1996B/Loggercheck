import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { ListGroup } from "react-bootstrap";
import { membershipstyle } from "./membershipstyle";
import { billingdetailstyle } from "./billinddetailstyle";
import { getCookie } from "../../../helpers/authentication";
import ChangeEmail from "../ChangeEmail/changeemail";
import ChangePassword from "../ChangePassword/changepassword";
import Updatephonenoform from "../ChangePhoneNumber/changeephoneno";

export default function Billingdetails() {
  const [showUpdateEmailNav, setUpdateEmailShowNav] = useState(false);
  const [showUpdatepasswordNav, setUpdatepasswordShowNav] = useState(false);
  const [showUpdatephonenoNav, setUpdatephonenoShowNav] = useState(false);

  const usernameCookie = getCookie("username");
  const emailAddress = useSelector((state) =>
    pathOr(usernameCookie ? usernameCookie : "", [
      "userAuth",
      "emailaddress",
      "username",
    ])(state)
  );

  const handleChangeEmail = (value) => {
    setUpdateEmailShowNav(value);
  };

  const handleChangepassword = (value) => {
    setUpdatepasswordShowNav(value);
  };
  const handleUpdatePhoneNumber = (value) => {
    setUpdatephonenoShowNav(value);
  };

  return (
    <ListGroup style={billingdetailstyle.listgroup()}>
      <ListGroup.Item style={billingdetailstyle.item()}>
        {`Membership & Billing`}
      </ListGroup.Item>
      <ListGroup.Item style={membershipstyle.background()}>
        <div className="float-left" style={billingdetailstyle.leftsection()}>
          {emailAddress}
        </div>
        <div
          className="float-right"
          style={billingdetailstyle.rightsection()}
          onClick={() => handleChangeEmail(true)}
        >
          Change Email
        </div>
        <>
          <ChangeEmail
            showUpdateEmailNav={showUpdateEmailNav}
            setUpdateEmailShowNav={setUpdateEmailShowNav}
            handleChangeEmail={handleChangeEmail}
          />
        </>
      </ListGroup.Item>
      <ListGroup.Item style={membershipstyle.background()}>
        <div
          className="float-left"
          style={billingdetailstyle.leftsectionnobold()}
        >
          Password: *********
        </div>
        <div
          className="float-right"
          style={billingdetailstyle.rightsectionnobold()}
          onClick={() => handleChangepassword(true)}
        >
          Change Password
        </div>
        <>
          <ChangePassword
            showUpdatepasswordNav={showUpdatepasswordNav}
            setUpdatepasswordShowNav={setUpdatepasswordShowNav}
            handleChangepassword={handleChangepassword}
          />
        </>
      </ListGroup.Item>
      <ListGroup.Item style={membershipstyle.background()}>
        <div
          className="float-left"
          style={billingdetailstyle.leftsectionnobold()}
        >
          Phone: (425) 123-4567
        </div>
        <div
          className="float-right"
          style={billingdetailstyle.rightsection()}
          onClick={() => handleUpdatePhoneNumber(true)}
        >
          Change phone number
        </div>
        <>
          <Updatephonenoform
            showUpdatephonenoNav={showUpdatephonenoNav}
            handleUpdatePhoneNumber={handleUpdatePhoneNumber}
            setUpdatephonenoShowNav={setUpdatephonenoShowNav}
          />
        </>
      </ListGroup.Item>
    </ListGroup>
  );
}
