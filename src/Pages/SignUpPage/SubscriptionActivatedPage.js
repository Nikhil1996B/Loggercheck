import React from "react";
import HeaderComp from "../../components/Header/headercomponent";
import Footer from "../../components/Footer/footer";
import Subscription from "../../components/Auth/SignUp/subscriptionActivated";

require("./style.scss");

function SubscriptionActivated() {
  return (
    <>
      <main className="Subscription-activated">
        <header aria-label="main header section on subscription activation screen">
          <HeaderComp />
        </header>
        <Subscription />
      </main>
      <Footer />
    </>
  );
}

export default SubscriptionActivated;
