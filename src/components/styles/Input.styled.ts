import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'text', placeholder: 'Search...' })`
  padding: 8px 15px;
  margin: 0 auto;
  max-width: 380px;
  width: 100%;
  height: 36px;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 25px;
  outline: none;
  border: 2px solid #c5c1c1;
  &:focus {
    border: 3px solid #e9b15e;
  }
`;

export default Input;
