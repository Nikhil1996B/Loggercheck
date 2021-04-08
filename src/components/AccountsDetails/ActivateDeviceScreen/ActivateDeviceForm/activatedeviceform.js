import React from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Row, Form } from "react-bootstrap";
import {
  activatedevicestyle,
  Activateddevicelayout,
} from "./activatedeviceformstyle";
import { useMediaQuery } from "../../../../components/Header/viewportHook";

export default function Activatedeviceform() {
  const { handleSubmit, register, errors } = useForm();
  const sm = useMediaQuery("(max-width: 576px)");

  const onSubmit = (values) => {
    // console.log(values);
  };
  return (
    <>
      <Activateddevicelayout />
      <Container style={activatedevicestyle.container(sm)}>
        <h3 style={activatedevicestyle.title(sm)}>Activate a Device</h3>
        <p style={activatedevicestyle.subtitle(sm)}>
          Enter six digit code here
        </p>
        <Row>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row style={{ marginLeft: "1rem" }}>
              <Form.Group
                style={activatedevicestyle.formInput()}
                controlId="forminput1"
              >
                <Form.Label>{""}</Form.Label>
                <Form.Control
                  name="forminput1"
                  type="number"
                  placeholder=""
                  style={activatedevicestyle.inputField()}
                  maxLength={1}
                  ref={register({
                    pattern: {
                      value: "",
                      message: "invalid number",
                    },
                  })}
                />
                {errors.currentpassword && (
                  <p style={activatedevicestyle.errormessage()}>
                    {errors.currentpassword.message}
                  </p>
                )}
              </Form.Group>
              <Form.Group
                controlId="forminput2"
                style={activatedevicestyle.formInput()}
              >
                <Form.Label>{""}</Form.Label>
                <Form.Control
                  name="forminput2"
                  type="number"
                  placeholder=""
                  style={activatedevicestyle.inputField()}
                  maxLength={1}
                  ref={register({
                    pattern: {
                      value: "",
                      message: "invalid number",
                    },
                  })}
                />
              </Form.Group>
              <Form.Group style={activatedevicestyle.formInput()}>
                <Form.Label>{""}</Form.Label>
                <Form.Control
                  id="forminput3"
                  name="forminput3"
                  type="number"
                  placeholder=""
                  style={activatedevicestyle.inputField()}
                  ref={register({
                    pattern: {
                      value: "",
                      message: "invalid number",
                    },
                  })}
                />
              </Form.Group>
              <Form.Group style={activatedevicestyle.formInput()}>
                <Form.Label>{""}</Form.Label>
                <Form.Control
                  id="forminput4"
                  name="forminput4"
                  type="number"
                  placeholder=""
                  style={activatedevicestyle.inputField()}
                  maxLength={1}
                  ref={register({
                    pattern: {
                      value: "",
                      message: "invalid number",
                    },
                  })}
                />
              </Form.Group>
              <Form.Group style={activatedevicestyle.formInput()}>
                <Form.Label>{""}</Form.Label>
                <Form.Control
                  type="number"
                  id="forminput5"
                  name="forminput5"
                  placeholder=""
                  style={activatedevicestyle.inputField()}
                  maxLength={1}
                  ref={register({
                    pattern: {
                      value: "",
                      message: "invalid phone number",
                    },
                  })}
                />
              </Form.Group>
              <Form.Group style={activatedevicestyle.formInput()}>
                <Form.Label>{""}</Form.Label>
                <Form.Control
                  id="forminput6"
                  name="forminput6"
                  type="number"
                  placeholder=""
                  style={activatedevicestyle.inputField()}
                  maxLength={1}
                  ref={register({
                    pattern: {
                      value: "",
                      message: "invalid phone number",
                    },
                  })}
                />
              </Form.Group>
            </Row>
            <Button style={activatedevicestyle.button()} type="submit">
              Activate Device
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
