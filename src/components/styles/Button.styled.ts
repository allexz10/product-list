import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  background-color: #e9b15e;
  border-radius: 4px;
  color: #ffffff;
  border: 2px solid transparent;
  font-weight: 600;
  font-size: 14px;
  transition: all ease 0.3s;
  &:hover,
  &:focus {
    background-color: #2e2c2c;
    color: #e9b15e;
    border: 2px solid transparent;
  }
`;

export const ButtonAddToCart = styled(StyledButton)`
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
`;

export default StyledButton;
