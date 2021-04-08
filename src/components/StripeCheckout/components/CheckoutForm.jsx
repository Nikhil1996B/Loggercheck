import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Card } from 'react-bootstrap';
import styled from "@emotion/styled";
import axios from "axios";
import Row from "./CheckoutComponents/Row";
import BillingDetailsFields from "./CheckoutComponents/BillingDetailsFields";
import SubmitButton from "./CheckoutComponents/SubmitButton";
import CheckoutError from "./CheckoutComponents/CheckoutError";

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;


const CheckoutForm = ({ price, onSuccessfulCheckout, selectedplan, currency, history }) => {

  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      }
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      // Axios request to payment intent, passing the price and multiplying it with 100
      const { data: clientSecret } = await axios.post("http://localhost:8282/api/payment_intents", {
        amount: price * 100,
        description: "Tentkotta subscription services"
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        alert("processing error")
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const iframeStyles = {
    base: {
      color: "#E1540F",
      fontSize: "16px",
      iconColor: "#585858",
      "::placeholder": {
        color: "#cccccc"
      }
    },
    invalid: {
      iconColor: "#cccccc",
      color: "#000000"
    },
    complete: {
      iconColor: "#000000"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };

  const cardElementStyle = {
    border: `2px solid #cccccc`,
    margin: `10px 0.25rem`,
    borderRadius: `4px`,
    backgroundColor: `#ffffff`,
    position: `relative`
  }
  const cardstyle = {
    background: `#F4F4F4 0% 0% no-repeat padding-box`,
    border: 'none',
    margin: '0.5rem 0'
  }

  const cardBodyLeft = {
    font: `normal normal medium 20px Inter`,
    letterSpacing: `0px`,
    color: `#2E2D2D`,
    marginBottom: '0.25rem'
  };

  const cardBodyLeftBelow = {
    font: `normal normal medium 17px Inter`,
    letterSpacing: `0px`,
    color: `#A6A6A6`,
    marginBottom: '0.25rem'
  }
  const cardBodyRight = {
    font: `normal normal medium 17px Inter`,
    letterSpacing: `0px`,
    color: `#E1540F`,
    textAlign: 'right',
    marginTop: '0.5rem'
  }

  const cardBodyStyle = {
    display: 'flex',
    padding: '0.45rem'
  }

  const contentwidth = {
    width: '45%'
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <>
        <BillingDetailsFields />
      </>
      <div style={cardElementStyle}>
        <CardElementContainer>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
        </CardElementContainer>
      </div>
      { checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <div>
        <Card style={cardstyle}>
          <Card.Body style={cardBodyStyle}>
            <div style={contentwidth}>
              <p style={cardBodyLeft}>{`${currency}`}</p>
              <p style={cardBodyLeftBelow}>{`${selectedplan}`}</p>
            </div >
            <div style={contentwidth}>
              <p style={cardBodyRight} onClick={() => history.push('/membership')}>
                Change
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Row>
        <SubmitButton disabled={isProcessing || !stripe}>
          {isProcessing ? "Processing..." : `CONTINUE`}
        </SubmitButton>
      </Row>
    </form >
  );
};

export default CheckoutForm;
