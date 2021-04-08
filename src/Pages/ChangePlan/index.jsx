import React, { useEffect, useState } from 'react';
import { pathOr } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';
import HeaderComp from '../../components/Header/headercomponent';
import Footer from '../../components/Footer/footer';
import { ChangePlanGlobalStyle } from './changeplanstyle';
import { membershipaction } from '../../actions/changeplanactions';
import { Cards, ChoosePlanDetails } from '../../components/Plans/index'

const membershipdetails = [
    {
        title: 'Monthly',
        text: 'Subscription for monthly. Auto renews every month',
        currency: '$',
        main: '9.99',
        price: '$119.88 Save $79.99',
        btnTxt: 'CHANGE PLAN',
        selected: true
    },
    {
        title: 'Anually',
        text: 'Subscription for Anually. Auto renews every month',
        currency: '$',
        main: '29.99',
        price: '$119.88 Save $109.99',
        btnTxt: 'CHANGE PLAN',
        selected: false
    },
    {
        title: 'weekly',
        text: 'Subscription for weekly. Auto renews every month',
        currency: '$',
        main: '39.99',
        price: '$119.88 Save $79.99',
        btnTxt: 'CHANGE PLAN',
        selected: false
    },
    {
        title: 'For one day',
        text: 'Subscription For one day. Auto renews every month',
        currency: '$',
        main: '49.99',
        price: '$119.88 Save $79.99',
        btnTxt: 'CHANGE PLAN',
        selected: false
    }
];

const plansDetails = {
    planHeader: 'Change the plan that’s right for you',
    planSubtitle: "",
    step: '',
    benefits: [
        'Downgrade or upgrade at any time.',
        'No commitments, cancel anytime.',
        'Everything on Tentkotta for one low price.',
        'No ads and no extra fees. Ever.'
    ]
}

function ChangePlan() {
    const [show, setShow] = useState(false);
    const [Navshow, setNavShow] = useState(false);
    const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);

    const dispatch = useDispatch();
    const history = useHistory();

    const themes = useSelector(state => pathOr(null, ['ThemeState'])(state));

    const handleSignInClick = () => {

    }
    const handleSubscriptionPlanClick = (membership) => {
        const selectedPlan = pathOr(null, ['title'])(membership);
        const main = pathOr(null, ['main'])(membership);
        const fraction = pathOr(null, ['currency'])(membership);
        const data = {
            selectedPlan,
            currency: `${fraction} ${main}`,
            amount: `${main}`
        }
        dispatch(membershipaction.selectedmembership(data))
        return history.push('/paymentoptions');
    }


    return (
        <>
            <ChangePlanGlobalStyle />
            <main
                className="changeplan-background"
                style={{}} >
                <header
                    aria-label="main header section for change plan page">
                    <HeaderComp />
                </header>
                <section className="container">
                    <ChoosePlanDetails
                        plansDetails={plansDetails}
                    />
                    <Cards
                        handleSubscriptionPlanClick={handleSubscriptionPlanClick}
                        membershipdetails={membershipdetails} />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default ChangePlan;