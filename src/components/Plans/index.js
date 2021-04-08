import React from 'react';

export const Cards = ({ handleSubscriptionPlanClick, membershipdetails }) => {

    return (
        <div className="card-container">
            {membershipdetails.map((membership, index) => (
                < div className="cards" key={index} onClick={() => handleSubscriptionPlanClick(membership)}>
                    <div className="rightsection">
                        <p className="card-title"><span>{membership.title}</span></p>
                        <p className="card-text">{membership.text}</p>
                    </div>
                    <div className="leftsection">
                        <p className="card-price">
                            <sup className="currency">{membership.currency}
                            </sup><span className="main">{membership.main}</span>
                        </p>
                        <p className="card-text">{membership.price}</p>
                    </div>
                    {!membership.selected && <button className="card-button"
                        onClick={() => handleSubscriptionPlanClick(membership)}>
                        {membership.btnTxt}
                    </button>}
                    {membership.selected &&
                        <button
                            style={{
                                background: `#E2E2E2 0% 0% no-repeat padding-box`,
                                color: '#585858',
                                border: 'none',
                                fontS: '13px',
                                padding: '0.5rem 3.5rem'
                            }}
                            className="selected"
                            disabled
                        >
                            {`SELECTED`}
                        </button>
                    }
                </div>
            ))
            }

        </div >
    )
}


export const ChoosePlanDetails = ({ plansDetails }) => {
    const { planHeader, step, benefits } = plansDetails;
    const checkSvg = () => {
        return (
            <svg
                viewBox="0 0 24 24"
                className="checkmark-group--icon"
                aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
            </svg>
        )
    }
    return (
        <>
            <div>
                {step && <p>{step}</p>}
                {planHeader && <h2>{planHeader}</h2>}
                {
                    benefits.map((benefit, key) => (
                        <p key={key}>
                            {checkSvg()}
                            <span className="checkmark-group--text">{benefit}</span>
                        </p>
                    ))
                }
            </div>
        </>
    )
}