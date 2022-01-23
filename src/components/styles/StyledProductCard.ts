import styled from 'styled-components';

const StyledProductCard = styled.div`
  width: 100%;  
  border-radius: 8px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid #c5c1c1;
  padding: 30px 10px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;
  position: relative;
  &:hover {
    box-shadow: 0 1px 10px #363635;
    border: 2px solid transparent;
  }
`;

export default StyledProductCard;
