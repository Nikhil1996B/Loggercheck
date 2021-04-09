import React from 'react';
import StripeCheckoutForm from '../../components/StripeCheckout/index';
import Footer from '../../components/Footer/footer';
import HeaderComp from '../../components/Header/headercomponent';
import './style.scss';


const StripeCheckoutFlow = () => {
    return (
        <>
            <main className="payment-background">
                <header aria-label="main header section for membership page">
                    <HeaderComp />
                </header>
                <div className="tentkotta-sans-font-loaded">
                    <div className="basicLayout simplicity" dir="ltr">
                        <div className="simpleContainer">
                            <div className="centerContainer">
                                <div className="regFormContainer">
                                    <p>Step 3 of 3</p>
                                    <h2>Set up your credit or debit card.</h2>
                                    <StripeCheckoutForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
};

export default StripeCheckoutFlow;