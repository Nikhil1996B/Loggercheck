import React from 'react';
import PaymentOptions from '../../components/Auth/PaymentOptions';
import Footer from '../../components/Footer/footer';
import HeaderComp from '../../components/Header/headercomponent';
import "./style.scss";

const PaymentSelectionPage = () => {
    // const [show, setShow] = useState(false);
    // const [Navshow, setNavShow] = useState(false);
    // const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    // const handleNavModal = () => setNavShow(!Navshow);
    // const handleModal = () => setShow(true);

    // const dispatch = useDispatch();

    // const themes = useSelector(state => state.ThemeState);
    return (
        <>

            <main className="payment-option-background">
                <header aria-label="main header section for membership page">
                    <HeaderComp />
                </header>
                <PaymentOptions />
            </main>
            <Footer />
        </>
    )
};

export default PaymentSelectionPage;