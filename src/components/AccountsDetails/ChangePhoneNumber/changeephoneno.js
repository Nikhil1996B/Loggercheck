import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updatephonenoAction } from './action';
import SideNav from 'react-simple-sidenav';
import {
    Form,
    Button,
    Container,
    Row,
    Image,
    ListGroup
} from 'react-bootstrap';
import {
    updatepasswordstyle,
    updateEmailFormStyle,
    successscreen,
    activatedevicestyle,
    Activateddevicelayout
} from './changephonenostyle';
import { rules } from '../../../helpers/rules';
import checkLogo from './assets/checkLogo.png';

const ChangePhoneNoOtp = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => {
    }
    return (
        <Container>
            <Activateddevicelayout />
            <Row style={{ marginLeft: '0.25rem' }}>
                <h1
                    style={updateEmailFormStyle.title()}>
                    {`Change Phone Number`}
                </h1>
                <div
                    style={updateEmailFormStyle.closeIcon()}
                    className={'float-right'}
                    onClick={() => {
                        // handleUpdatePhoneNumber(false);
                        // setInputs({
                        //     newphonenumber: "",
                        //     password: "",
                        // });
                        // setcapturepwd(false);
                    }}
                >X</div>
            </Row>
            <Row
                style={{
                    marginLeft: '0.25rem'
                }}
            >
                <p style={updateEmailFormStyle.subtitle()}>
                    {`Verify your new phone number. Please enter six digit code which you received in +91-8976543210`}
                </p>
            </Row>
            <Row>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row
                        style={{
                            marginLeft: '0.25rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Form.Group
                            style={activatedevicestyle.formInput()}
                            controlId="forminput1"
                        >
                            <Form.Label>{''}</Form.Label>
                            <Form.Control
                                name="forminput1"
                                type="number"
                                placeholder=""
                                style={activatedevicestyle.inputField()}
                                maxLength={1}
                                ref={register({
                                    pattern: {
                                        value: '',
                                        message: "invalid number",
                                    }
                                })}
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="forminput2"
                            style={activatedevicestyle.formInput()}>
                            <Form.Label>{''}</Form.Label>
                            <Form.Control
                                name="forminput2"
                                type="number"
                                placeholder=""
                                style={activatedevicestyle.inputField()}
                                maxLength={1}
                                ref={register({
                                    pattern: {
                                        value: '',
                                        message: "invalid number",
                                    }
                                })}
                            />
                        </Form.Group>
                        <Form.Group
                            style={activatedevicestyle.formInput()}>
                            <Form.Label>{''}</Form.Label>
                            <Form.Control
                                id="forminput3"
                                name="forminput3"
                                type="number"
                                placeholder=""
                                style={activatedevicestyle.inputField()}
                                ref={register({
                                    pattern: {
                                        value: '',
                                        message: "invalid number",
                                    }
                                })}
                            />
                        </Form.Group>
                        <Form.Group
                            style={activatedevicestyle.formInput()}>
                            <Form.Label>{''}</Form.Label>
                            <Form.Control
                                id="forminput4"
                                name="forminput4"
                                type="number"
                                placeholder=""
                                style={activatedevicestyle.inputField()}
                                maxLength={1}
                                ref={register({
                                    pattern: {
                                        value: '',
                                        message: "invalid number",
                                    }
                                })}

                            />
                        </Form.Group>
                        <Form.Group
                            style={activatedevicestyle.formInput()}>
                            <Form.Label>{''}</Form.Label>
                            <Form.Control
                                type="number"
                                id="forminput5"
                                name="forminput5"
                                placeholder=""
                                style={activatedevicestyle.inputField()}
                                maxLength={1}
                                ref={register({
                                    pattern: {
                                        value: '',
                                        message: "invalid phone number",
                                    }
                                })}
                            />
                        </Form.Group>
                        <Form.Group
                            style={activatedevicestyle.formInput()}>
                            <Form.Label>{''}</Form.Label>
                            <Form.Control
                                id="forminput6"
                                name="forminput6"
                                type="number"
                                placeholder=""
                                style={activatedevicestyle.inputField()}
                                maxLength={1}
                                ref={register({
                                    pattern: {
                                        value: '',
                                        message: "invalid phone number",
                                    }
                                })}
                            />
                        </Form.Group>
                    </Row>
                    <Button
                        style={activatedevicestyle.button()}
                        type='submit'
                    >
                        NEXT
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

const BackToAccount = ({ handleChangeEmail }) => {
    const history = useHistory();
    return (
        <Container style={successscreen.container()}>
            <ListGroup>
                <ListGroup.Item style={successscreen.listitem()}>
                    <div style={successscreen.imageIcon()}>
                        <Image src={checkLogo} alt="check icon" />
                    </div>
                    <h1 style={successscreen.title()}>
                        Phone number changed
                    </h1>
                    <p style={successscreen.subtitle()}>
                        You can start using your new phone number
                    </p>
                    <Button
                        style={updateEmailFormStyle.button()}
                        type='submit'
                        onClick={() => handleChangeEmail(false)}
                    >
                        {`BACK TO ACCOUNT`}
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
};

const Updatephonenoform = ({
    handleUpdatePhoneNumber,
    setUpdatephonenoShowNav,
    showUpdatephonenoNav
}) => {

    const [inputs, setInputs] = useState({
        newphonenumber: "",
        password: "",
    });

    const dispatch = useDispatch();

    const [capturepwd, setcapturepwd] = useState(false);

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (values) => {
        if (values && values.newphonenumber) {
            setInputs({
                ...inputs,
                newphonenumber: values.newphonenumber,
            });

        }
        else if (values && values.password) {
            setInputs({
                ...inputs,
                password: values.password,
            });
        }
        if (inputs && inputs.password && inputs.newphonenumber) {
            return dispatch(updatephonenoAction.updatephoneno(inputs.newphonenumber, inputs.password));
        }
    };

    useEffect(() => {
        if (!inputs.newphonenumber) return;
        setcapturepwd(true);
        return () => {

        }
    }, [inputs.newphonenumber]);


    return (
        <>
            <Container>
                <Row style={{ marginLeft: '0.25rem' }}>
                    <h1
                        style={updateEmailFormStyle.title()}>
                        {capturepwd ? `Validate your account` : `Update Phone number`}
                    </h1>
                    <div
                        style={updateEmailFormStyle.closeIcon()}
                        className={'float-right'}
                        onClick={() => {
                            handleUpdatePhoneNumber(false);
                            setInputs({
                                newphonenumber: "",
                                password: "",
                            });
                            setcapturepwd(false);
                        }}
                    >X</div>
                </Row>
                <Row style={{ marginLeft: '0.25rem' }}>
                    <p style={updateEmailFormStyle.subtitle()}>
                        {capturepwd ? `Enter password to change your phone number` : `Enter the new phone number that you wish to change`}
                    </p>
                </Row>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {!capturepwd ?
                        <Form.Group
                            controlId="newphonenumber"
                        >
                            <Form.Label>{''}</Form.Label>
                            <Form.Control
                                name="newphonenumber"
                                type="text"
                                placeholder="Phone Number"
                                ref={register({
                                    required: "phonenumber filed is not filled",
                                    pattern: {
                                        value: pathOr(null, ['validation', 'phoneNumber'])(rules),
                                        message: "invalid phone number",
                                    }
                                })}
                                style={updateEmailFormStyle.input()}
                            />
                            {errors.newemail &&
                                <p
                                    style={updateEmailFormStyle.errormessage()}>
                                    {errors.newemail.message}
                                </p>
                            }
                        </Form.Group>
                        : null
                    }
                    {capturepwd ? <Form.Group
                        controlId="password"
                    >
                        <Form.Label>{''}</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="password"
                            maxLength="61"
                            minLength="4"
                            ref={
                                register({
                                    required: "password is not filled",
                                    validate: value => value.length
                                })
                            }
                            onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}
                            style={updateEmailFormStyle.input()}
                        />
                        {errors.password &&
                            <p
                                style={updateEmailFormStyle.errormessage()}>
                                {errors.password.message}
                            </p>
                        }
                    </Form.Group> : null}
                    <Button
                        style={updateEmailFormStyle.button()}
                        type='submit'
                    >
                        {capturepwd ? `Confirm` : `Change`}
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default function ChangePhoneNo({
    showUpdatephonenoNav,
    handleUpdatePhoneNumber,
    setUpdatephonenoShowNav,
    children
}) {
    return (
        <SideNav navStyle={
            updatepasswordstyle.navbarstyle()
        }
            showNav={showUpdatephonenoNav}
            onHideNav={() => {
                setUpdatephonenoShowNav(false);
            }
            }
            titleStyle={{
                backgroundColor: '#FFFFFF'
            }}
            itemStyle={{
                backgroundColor: '#FFFFFF',
                padding: '0 2%'
            }}
            openFromRight={true}
            itemHoverStyle={{
                backgroundColor: '#ffffff'
            }}
        >
            <Updatephonenoform
                handleUpdatePhoneNumber={handleUpdatePhoneNumber}
                showUpdatephonenoNav={showUpdatephonenoNav}
                setUpdatephonenoShowNav={setUpdatephonenoShowNav}
            />
            {/* <ChangePhoneNoOtp /> */}
            {/* {<BackToAccount handleChangeEmail={handleUpdatePhoneNumber} />} */}
        </SideNav >
    )
}
