import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import GlobalStyles from './components/styles/Global';
import ProductCard from './components/ProductCard/ProductCard';
import SearchBar from './components/SearchBar/SearchBar';
import Container from './components/styles/Container.styled';
import ProductList from './components/styles/ProductList.styled';
import { LoadingImage } from './components/styles/Image.styled';

axios.defaults.baseURL = 'https://fakestoreapi.com';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredList, setFilteredList] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [activeButton, setActiveButton] = useState('all');

  useEffect(() => {
    setLoading(true);
    axios
      .get('/products')
      .then(({ data }: AxiosResponse<Product[]>) => {
        setProducts(data);
        setFilteredList(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateFilteredList = () => {
    const filtered = products.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredList(filtered);
  };

  useEffect(() => {
    updateFilteredList();
  }, [loading]);

  return (
    <Container>
      <GlobalStyles />
      <SearchBar
        updateInputValue={setInputValue}
        loading={setLoading}
        activeButton={setActiveButton}
      />

      {!loading ? (
        <ProductList>
          {filteredList
            .filter((product) => (activeButton === 'all'
              ? product
              : product.category === activeButton))
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </ProductList>
      ) : (
        <LoadingImage src="loading.gif" />
      )}
    </Container>
  );
};

export default App;
