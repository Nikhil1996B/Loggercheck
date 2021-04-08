import styled from "@emotion/styled";
import React from 'react';

const FormFieldContainer = styled.div`
display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border: 2px solid #cccccc;
  margin: 6px 4px;
  &:first-of-type {
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #585858;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid ##585858;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #2E2D2D;
  background-color: transparent;
  animation: 1ms void-animation-out;
  &::placeholder {
    color: ##585858;
  }
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      {/* <Label htmlFor={name}>{label}</Label> */}
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

export default FormField;
