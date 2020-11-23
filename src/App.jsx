import React, { useState, useEffect } from 'react';
import badApi from './services/badApi';
import PageContainer from './components/PageContainer';
import { listManufacturers } from './utils/helper';

const App = () => {
  const [products, setProducts] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);

  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingAvailability, setLoadingAvailability] = useState(true);

  useEffect(() => {
    const init = async () => {
      const loadProducts = await badApi.getAllProducts(['shirts', 'jackets', 'accessories']);
      setProducts(loadProducts);
      setLoadingProducts(false);
      const manufacturers = listManufacturers(loadProducts);
      const loadAvailabilities = await badApi.getAllAvailabilities(manufacturers);
      setAvailabilities(loadAvailabilities);
      setLoadingAvailability(false);
    };

    init();
  }, []);

  return (
    <PageContainer
      products={products}
      availabilities={availabilities}
      loadingProducts={loadingProducts}
      loadingAvailability={loadingAvailability}
    />
  );
};

export default App;
