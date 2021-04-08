import React, { useState, useEffect } from "react";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import PromoCode from "./promoCode";
import { useHistory } from "react-router-dom";
import { PaymentOptionsGlobalStyle } from "./paymentoptionstyle";
import { PayByCard } from "./CardPaymentSelection/cardpayment";
import PayPalButton from "./PayPalButton/button";
import "./style.scss";

export const PaymentOptions = () => {
  const history = useHistory();
  const membershipdetails = useSelector((state) =>
    pathOr("", ["membership", "data"])(state)
  );
  const currency = pathOr("", ["currency"])(membershipdetails);
  const selectedplan = pathOr("", ["selectedPlan"])(membershipdetails);
  const handleCardPaymentSelection = () => {
    history.push("/cardcheckout");
  };
  return (
    <>
      <PaymentOptionsGlobalStyle />
      <section className={"paymentoptions"}>
        <div className="tentkotta-sans-font-loaded">
          <div className="basicLayout simplicity" dir="ltr">
            <div className="simpleContainer">
              <div className="centerContainer">
                <div className="regFormContainer">
                  <p>Step 3 of 3</p>
                  <h2>Set up your payment.</h2>
                  <p>
                    <span className="gutter-padd">
                      Your membership starts as soon as you set up payment.
                    </span>
                  </p>
                  <p>
                    <span className="emphasise">No commitments.</span>
                  </p>
                  <p>
                    <span className="emphasise">Cancel online anytime.</span>
                  </p>
                  <div className="price-section">
                    <div className="price-left-section">
                      <div>{currency}</div>
                      <div>{selectedplan}</div>
                    </div>
                    <div
                      className="price-right-section"
                      onClick={() => {
                        history.push("./membership");
                      }}
                    >
                      <span>Change</span>
                    </div>
                  </div>
                  <div className="promobtn">
                    <PromoCode />
                  </div>
                  <PayByCard
                    handleCardPaymentSelection={handleCardPaymentSelection}
                  />
                  <PayPalButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentOptions;
