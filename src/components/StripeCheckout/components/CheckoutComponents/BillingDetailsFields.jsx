import React from 'react';
import FormField from "./FormField";
import Row from "./Row";

const BillingDetailsFields = () => {
  return (
    <>
      <Row>
        <FormField
          name="address"
          label="Address"
          type="text"
          placeholder="123 Street Name/ Loacality"
          required
        />
        <FormField
          name="name"
          label="Name"
          type="text"
          placeholder="Name"
          required
        />
      </Row>
      <Row>
        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="email@example.com"
          required
        />
        <FormField
          name="city"
          label="City"
          type="text"
          placeholder="City Name"
          required
        />
      </Row>
      <Row>
        <FormField
          name="state"
          label="State"
          type="text"
          placeholder="State Name"
          required
        />
        <FormField
          name="zip"
          label="ZIP"
          type="text"
          placeholder="123456"
          required
        />
      </Row>
    </>
  );
};

export default BillingDetailsFields;
