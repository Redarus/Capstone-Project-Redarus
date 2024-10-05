// src/components/StockForm.jsx
import { useState, useContext } from 'react';
import { StockContext } from '../context/StockContext';
import { useFetchStockPrice } from '../hooks/useFetchStockPrice';

const StockForm = () => {
  const { stocks, setStocks } = useContext(StockContext);
  const { fetchStockPrice } = useFetchStockPrice();

  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentPrice = await fetchStockPrice(symbol);

    if (!currentPrice) {
      alert('Invalid stock symbol');
      return;
    }

    setStocks([
      ...stocks,
      { symbol, quantity: parseFloat(quantity), purchasePrice: parseFloat(price), currentPrice }
    ]);

    setSymbol('');
    setQuantity('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="stock-form">
      <input
        type="text"
        placeholder="Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Purchase Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
