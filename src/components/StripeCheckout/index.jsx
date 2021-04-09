import React from "react";
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { useSelector } from 'react-redux';
import Layout from "./components/Layout";
// import Row from "./components/CheckoutComponents/Row";
import CheckoutForm from "./components/CheckoutForm";
import getPrice from "./utils/get-checkout-price";
// import Membershipdetails from "../AccountsDetails/Membershipdetails/membership";

const StripeCheckoutForm = props => {
  // const [price, setPrice] = useState(23.99);
  const history = useHistory();

  const membershipdetails = useSelector(state => pathOr('', ['membership', 'data'])(state));
  const currency = pathOr('', ['currency'])(membershipdetails);
  const selectedplan = pathOr('', ['selectedPlan'])(membershipdetails);
  const amount = pathOr('', ['amount'])(membershipdetails);
  return (
    <Layout title="Get your subscription today">
      <CheckoutForm
        price={getPrice(amount)}
        currency={currency}
        selectedplan={selectedplan}
        history={history}
        onSuccessfulCheckout={() => history.push("/success")}
      />
    </Layout>
  );
};

export default StripeCheckoutForm;
