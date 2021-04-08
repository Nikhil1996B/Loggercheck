import React from "react";
import Footer from '../../components/Footer/footer';
import HeaderComp from '../../components/Header/headercomponent';
import ForgotPasswordComponent from '../../components/Auth/ForgotPassword';
import './style.scss';

export default function ForgotPassword() {
    return (
        <>
            <main className="forgotpassword-background" style={{}}>
                <header aria-label="main header section">
                    <HeaderComp />
                </header>
                <ForgotPasswordComponent />
            </main>
            <Footer />
        </>
    )
}
