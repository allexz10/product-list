import React from 'react';
import { Product } from '../../App';
import { ButtonAddToCart } from '../styles/Button.styled';
import Wrapper from '../styles/Wrapper.styled';
import { CardImage } from '../styles/Image.styled';
import StyledProductCard from '../styles/StyledProductCard';
import {
  CardTitle,
  CardCount,
  CardPrice,
  CardRating,
  CardSale,
} from '../styles/ProductCardText.styled';

type Card = {
  product: Product;
};

class ProductCard extends React.Component<Card> {
  state = this.props.product;

  render() {
    const {
      title, image, rating, price,
    } = this.state;

    return (
      <StyledProductCard>
        <Wrapper>
          <CardImage alt={title} src={image} />
        </Wrapper>

        <CardTitle fontSize="16px" fontWeight="700" color="black">
          {title}
        </CardTitle>
        <CardRating>{` Rating: ${rating.rate}`}</CardRating>
        <CardCount>{`In stock: ${rating.count} `}</CardCount>

        <CardPrice color="#e9b15e" fontSize="24px" fontWeight="700">
          {`${price}€`}
          &nbsp;
          <CardSale color="#b3b0b0" fontSize="16px" fontWeight="600">
            {`${Math.floor(+price + 50)} €`}
          </CardSale>
        </CardPrice>
        <ButtonAddToCart>Add to cart</ButtonAddToCart>
      </StyledProductCard>
    );
  }
}

export default ProductCard;
