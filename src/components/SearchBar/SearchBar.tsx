import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import StyledSearchBar from '../styles/StyledSearchBar';
import { ButtonWrapper } from '../styles/Wrapper.styled';
import StyledButton from '../styles/Button.styled';
import Input from '../styles/Input.styled';

axios.defaults.baseURL = 'https://fakestoreapi.com';

type Props = {
  updateInputValue: (value: string) => void;
  loading: (arg: boolean) => void;
  activeButton: (title: string) => void;
};

const SearchBar = ({ updateInputValue, loading, activeButton }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [buttonTitles, setButtonTitles] = useState<string[]>([]);

  useEffect(() => {
    loading(true);
    axios
      .get('/products/categories')
      .then(({ data }: AxiosResponse<string[]>) => {
        setButtonTitles([...data, 'all']);
      })
      .finally(() => loading(false));
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      updateInputValue(inputValue);
      loading(true);

      const newtimeOut = setTimeout(() => {
        loading(false);
      }, 300);

      return () => {
        clearTimeout(newtimeOut);
      };
    }, 600);

    return () => {
      clearTimeout(timeOut);
    };
  }, [inputValue]);

  return (
    <StyledSearchBar>
      <ButtonWrapper>
        {buttonTitles.sort().map((title) => (
          <StyledButton
            key={title}
            onClick={() => {
              activeButton(title);
              setInputValue('');
            }}
          >
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </StyledButton>
        ))}
      </ButtonWrapper>

      <Input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value.trimLeft());
        }}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
