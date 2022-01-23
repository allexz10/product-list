import styled from 'styled-components';

type Props = {
  fontWeight: string;
  fontSize: string;
  color: string;
};

export const CardTitle = styled.span<Props>`
font-weight:  ${({ fontWeight }) => fontWeight || '400'};
font-size: ${({ fontSize }) => fontSize || '14px'}
  max-height: 250px;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  padding: 0 20px;
`;

export const CardRating = styled.span`
  font-weight: 600;
`;

export const CardCount = styled(CardRating)``;

export const CardPrice = styled.span<Props>`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin-bottom: 20px;
  display:inline-flex;
  justify-content:center;
  align-items:center;
`;

export const CardSale = styled(CardPrice)`
  margin-bottom: 0;
  text-decoration: line-through;
`;

export default CardTitle;
