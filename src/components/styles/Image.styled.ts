import styled from 'styled-components';

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const LoadingImage = styled(CardImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`;

export default CardImage;
