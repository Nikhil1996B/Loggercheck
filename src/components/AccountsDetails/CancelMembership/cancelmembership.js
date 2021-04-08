import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { cancelMembershipAction } from "../../../actions/cancelmembershipaction";
import SideNav from "react-simple-sidenav";
import {
  Form,
  Button,
  Container,
  Row,
  Image,
  ListGroup,
} from "react-bootstrap";
import {
  updatepasswordstyle,
  updateEmailFormStyle,
  successscreen,
} from "./cancelmembershipstyle";
import { rules } from "../../../helpers/rules";
import checkLogo from "../ChangeEmail/assets/checkLogo.png";

const BackToAccount = ({ handleCancelMembership }) => {
  const history = useHistory();
  return (
    <Container style={successscreen.container()}>
      <ListGroup>
        <ListGroup.Item style={successscreen.listitem()}>
          <div style={successscreen.imageIcon()}>
            <Image src={checkLogo} alt="check icon" />
          </div>
          <h1 style={successscreen.title()}>Cancellation Request Submitted</h1>
          <p style={successscreen.subtitle()}>
            Our executive will get in touch with you shortly
          </p>
          <Button
            style={updateEmailFormStyle.button()}
            type="submit"
            onClick={() => handleCancelMembership(false)}
          >
            {`BACK TO ACCOUNT`}
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

const Cancelmembershipform = ({
  handleCancelMembership,
  showCancelMembershipNav,
  setUpdateMembershipShowNav,
}) => {
  const [inputs, setInputs] = useState({
    briefinfo: "",
    cancellationreason: "",
  });

  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    if (values) {
      (async () => {
        await setInputs({
          ...inputs,
          briefinfo: values.briefinfo,
          cancellationreason: values.cancellationreason,
        });
        console.log(inputs);
        return dispatch(
          cancelMembershipAction.cancelmembershiprequest(
            inputs.briefinfo,
            inputs.briefinfo
          )
        );
      })().catch((err) => {
        console.error(err);
      });
    }
  };

  return (
    <>
      <Container>
        <Row
          style={{
            marginLeft: "0.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={updateEmailFormStyle.title()}>Cancel Membership</h1>
          <div
            style={updateEmailFormStyle.closeIcon()}
            className={"float-right"}
            onClick={() => {
              setUpdateMembershipShowNav(false);
              setInputs({
                briefinfo: "",
                cancellationreason: "",
              });
            }}
          >
            X
          </div>
        </Row>
        <Row
          style={{
            marginLeft: "0.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={updateEmailFormStyle.subtitle()}>
            Cancel your membership by providing us few details
          </p>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="cancellationreason">
            <select
              style={{
                width: "100%",
                color: "#585858",
                fontSize: "15px",
                padding: "0.5rem 0.25rem",
              }}
              value={inputs.cancellationreason}
              onChange={(e) =>
                setInputs({ ...inputs, cancellationreason: e.target.value })
              }
            >
              <option value="Select Cancellation Reason">
                Select Cancellation Reason
              </option>
              <option value="Reason 1">Reason 1</option>
              <option value="Reason 2">Reason 2</option>
              <option value="Reason 3">Reason 3</option>
            </select>
            {/* <DropdownButton
                            title="Select Cancellation Reason"
                            name="cancellationreason"
                            onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}>
                            <Dropdown.Item eventKey="Streaming issue">Streaming issue</Dropdown.Item>
                            <Dropdown.Item eventKey="Content not up to mark">Content not up to mark</Dropdown.Item>
                            <Dropdown.Item eventKey="Moving out of state">Moving out of state</Dropdown.Item>
                        </DropdownButton> */}
            {errors.cancellationreason && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.cancellationreason.message}
              </p>
            )}
          </Form.Group>
          <Form.Group controlId="briefinfo">
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="briefinfo"
              as="textarea"
              placeholder="Please provide a brief message and your contact #"
              maxLength="61"
              minLength="4"
              ref={register({
                required: "briefinfo filed is not filled",
                validate: (value) => value.length,
              })}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
              style={updateEmailFormStyle.input()}
            />
            {errors.briefinfo && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.briefinfo.message}
              </p>
            )}
          </Form.Group>
          <Button style={updateEmailFormStyle.button()} type="submit">
            {`SUBMIT CANCELLATION REQUEST`}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default function CancelMembership({
  showCancelMembershipNav,
  setUpdateMembershipShowNav,
  handleCancelMembership,
  children,
}) {
  return (
    <SideNav
      navStyle={updatepasswordstyle.navbarstyle()}
      showNav={showCancelMembershipNav}
      onHideNav={() => {
        setUpdateMembershipShowNav(false);
      }}
      titleStyle={{
        backgroundColor: "#FFFFFF",
      }}
      itemStyle={{
        backgroundColor: "#FFFFFF",
        padding: "0 2%",
      }}
      openFromRight={true}
      itemHoverStyle={{
        backgroundColor: "#ffffff",
      }}
    >
      <Cancelmembershipform
        handleCancelMembership={handleCancelMembership}
        showCancelMembershipNav={showCancelMembershipNav}
        setUpdateMembershipShowNav={setUpdateMembershipShowNav}
      />
      {/* {<BackToAccount handleCancelMembership={handleCancelMembership} />} */}
    </SideNav>
  );
}
