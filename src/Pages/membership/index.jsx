import React from 'react';
import { pathOr } from 'ramda';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';
import HeaderComp from '../../components/Header/headercomponent';
import Footer from '../../components/Footer/footer';
import { MembershipGlobalStyle } from './membershipstyle';
import { membershipaction } from '../../actions/membershipactions';
import { Cards, ChoosePlanDetails } from '../../components/Plans/index'

const membershipdetails = [
    {
        title: 'Monthly',
        text: 'Subscription for monthly. Auto renews every month',
        currency: '$',
        main: '9.99',
        price: '$119.88 Save $79.99',
        btnTxt: 'SUBSCRIBE',
        selected: false
    },
    {
        title: 'Anually',
        text: 'Subscription for Anually. Auto renews every month',
        currency: '$',
        main: '29.99',
        price: '$119.88 Save $109.99',
        btnTxt: 'SUBSCRIBE',
        selected: false
    },
    {
        title: 'weekly',
        text: 'Subscription for weekly. Auto renews every month',
        currency: '$',
        main: '39.99',
        price: '$119.88 Save $79.99',
        btnTxt: 'SUBSCRIBE',
        selected: false
    },
    {
        title: 'For one day',
        text: 'Subscription For one day. Auto renews every month',
        currency: '$',
        main: '49.99',
        price: '$119.88 Save $79.99',
        btnTxt: 'SUBSCRIBE',
        selected: false
    }
];

const plansDetails = {
    planHeader: 'Choose the plan that’s right for you',
    planSubtitle: "",
    step: 'Step 2 of 3',
    benefits: [
        'Downgrade or upgrade at any time.',
        'No commitments, cancel anytime.',
        'Everything on Tentkotta for one low price.',
        'No ads and no extra fees. Ever.'
    ]
};

function MemberShip() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubscriptionPlanClick = (membership) => {
        const selectedPlan = pathOr(null, ['title'])(membership);
        const main = pathOr(null, ['main'])(membership);
        const fraction = pathOr(null, ['currency'])(membership);
        console.log(`selected membership plan`, selectedPlan, 'and price', ` ${fraction} ${main}`);
        const data = {
            selectedPlan,
            currency: `${fraction} ${main}`,
            amount: `${main}`
        };
        dispatch(membershipaction.selectedmembership(data));
        return history.push('/paymentoptions');
    }


    return (
        <>
            <MembershipGlobalStyle />
            <main
                className="membership-background"
                style={{}} >
                <header
                    aria-label="main header section for membership page">
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

export default MemberShip;