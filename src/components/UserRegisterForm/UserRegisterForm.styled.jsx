import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(9, 22, 122);
  box-shadow: 0px 0px 40px -3px rgba(5, 51, 255, 1);
`;

export const RegisterFormLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const LabelText = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: rgb(234, 210, 24);
`;

export const RegisterFormInput = styled(Field)`
  width: 100%;
  border-radius: 10px;
  border-color: transparent;
  padding: 5px;
  &:focus {
    background-color: rgb(234, 210, 24);
    outline: none;
  }
  &::placeholder {
    font-weight: 700;
  }
`;

export const RegisterFormBtn = styled.button`
  margin-top: 20px;
  padding: 8px;
  font-size: 20px;
  font-weight: 600;
  color: rgb(65, 244, 16);
  border-radius: 10px;
  border: transparent;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: rgb(234, 210, 24);
  }
`;

export const RegisterFormText = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(234, 210, 24);
`;

export const NavLink = styled(Link)`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #ff0000;
    text-shadow: 0 0 5px rgb(252, 5, 5), 0 0 10px rgb(252, 5, 5),
      0 0 15px rgb(252, 5, 5), 0 0 20px rgb(252, 5, 5), 0 0 30px rgb(252, 5, 5),
      0 0 40px rgb(252, 5, 5), 0 0 55px rgb(252, 5, 5), 0 0 75px rgb(252, 5, 5);
  }
`;

export const Error = styled.div`
  position: absolute;
  font-size: 18px;

  top: 0;
  left: 0;

  transform: translate(320px, 20%);

  color: #ffffff;
  text-shadow: 0 0 5px rgb(252, 5, 5), 0 0 10px rgb(252, 5, 5),
    0 0 15px rgb(252, 5, 5), 0 0 20px rgb(252, 5, 5), 0 0 30px rgb(252, 5, 5),
    0 0 40px rgb(252, 5, 5), 0 0 55px rgb(252, 5, 5), 0 0 75px rgb(252, 5, 5);
`;
