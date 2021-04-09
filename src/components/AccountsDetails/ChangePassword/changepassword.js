import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updatepwdAction } from "../../../actions/changepwdaction";
import SideNav from "react-simple-sidenav";
import {
  Form,
  Button,
  Container,
  Row,
  // Image,
  // ListGroup,
} from "react-bootstrap";
import {
  updatepasswordstyle,
  updateEmailFormStyle,
  // successscreen,
} from "./changepasswordstyle";
// import { rules } from '../../../helpers/rules';
// import checkLogo from "../ChangeEmail/assets/checkLogo.png";

// const BackToAccount = ({ handleChangepassword }) => {
//   // const history = useHistory();
//   return (
//     <Container style={successscreen.container()}>
//       <ListGroup>
//         <ListGroup.Item style={successscreen.listitem()}>
//           <div style={successscreen.imageIcon()}>
//             <Image src={checkLogo} alt="check icon" />
//           </div>
//           <h1 style={successscreen.title()}>Password Changed</h1>
//           <p style={successscreen.subtitle()}>
//             You can start using your new password
//           </p>
//           <Button
//             style={updateEmailFormStyle.button()}
//             type="submit"
//             onClick={() => handleChangepassword(false)}
//           >
//             {`BACK TO ACCOUNT`}
//           </Button>
//         </ListGroup.Item>
//       </ListGroup>
//     </Container>
//   );
// };

const Updatepasswordform = ({
  handleChangepassword,
  showUpdatepasswordNav,
  setUpdatepasswordShowNav,
}) => {
  const [inputs, setInputs] = useState({
    newpassword: "",
    currentpassword: "",
    confirmpassword: "",
  });

  const dispatch = useDispatch();

  const [capturepwd, setcapturepwd] = useState(false);

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    if (values) {
      (async () => {
        await setInputs({
          ...inputs,
          newpassword: values.newpassword,
          currentpassword: values.currentpassword,
          confirmpassword: values.confirmpassword,
        });
        return dispatch(
          updatepwdAction.updatepwd(inputs.currentpassword, inputs.newpassword)
        );
      })().catch((err) => {
        console.error(err);
      });
    }
  };

  useEffect(() => {
    if (!inputs.currentpassword) return;
    setcapturepwd(true);
    return () => {};
  }, [inputs.currentpassword]);

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
          <h1 style={updateEmailFormStyle.title()}>Update Password</h1>
          <div
            style={updateEmailFormStyle.closeIcon()}
            className={"float-right"}
            onClick={() => {
              handleChangepassword(false);
              setInputs({
                newpassword: "",
                currentpassword: "",
                confirmpassword: "",
              });
              setcapturepwd(false);
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
          <p style={updateEmailFormStyle.subtitle()}>Enter your new password</p>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="currentpassword">
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="currentpassword"
              type="password"
              placeholder="password"
              ref={register({
                required: "password is not filled",
                validate: (value) => value.length,
              })}
              style={updateEmailFormStyle.input()}
            />
            {errors.currentpassword && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.currentpassword.message}
              </p>
            )}
          </Form.Group>
          <Form.Group controlId="newpassword">
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="newpassword"
              type="password"
              placeholder="new password"
              maxLength="61"
              minLength="4"
              ref={register({
                required: "newpassword filed is not filled",
                validate: (value) => value.length,
              })}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
              style={updateEmailFormStyle.input()}
            />
            {errors.newpassword && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.newpassword.message}
              </p>
            )}
          </Form.Group>
          <Form.Group controlId="confirmpassword">
            <Form.Label>{""}</Form.Label>
            <Form.Control
              name="confirmpassword"
              type="password"
              placeholder="confirm password"
              maxLength="61"
              minLength="4"
              ref={register({
                required: "newpassword filed is not filled",
                validate: (value) => value.length,
              })}
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
              style={updateEmailFormStyle.input()}
            />
            {errors.confirmpassword && (
              <p style={updateEmailFormStyle.errormessage()}>
                {errors.confirmpassword.message}
              </p>
            )}
          </Form.Group>
          <Button style={updateEmailFormStyle.button()} type="submit">
            {`Change`}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export const EmailChangeSuccess = () => {
  return <></>;
};

export default function ChangePassword({
  showUpdatepasswordNav,
  setUpdatepasswordShowNav,
  handleChangepassword,
  children,
}) {
  return (
    <SideNav
      navStyle={updatepasswordstyle.navbarstyle()}
      showNav={showUpdatepasswordNav}
      onHideNav={() => {
        setUpdatepasswordShowNav(false);
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
      <Updatepasswordform
        handleChangepassword={handleChangepassword}
        showUpdatepasswordNav={showUpdatepasswordNav}
        setUpdatepasswordShowNav={setUpdatepasswordShowNav}
      />
      {/* {<BackToAccount handleChangepassword={handleChangepassword} />} */}
    </SideNav>
  );
}
