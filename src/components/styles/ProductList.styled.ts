import styled from 'styled-components';

const ProductList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 20px;
  
  @media only screen and (max-width: 375px){
    grid-template-columns: repeat(auto-fit, 300px);
    gap:15px;   
  }
`;

export default ProductList;
