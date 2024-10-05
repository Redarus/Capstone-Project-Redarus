// src/hooks/useFetchStockPrice.js
import { useCallback } from 'react';
import axios from 'axios';

const ALPHA_VANTAGE_API_KEY = 'YOUR_API_KEY'; // Replace with your API key

export const useFetchStockPrice = () => {
  const fetchStockPrice = useCallback(async (symbol) => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=5J75TNJ8VJHQZ5Q7`
      );
      const price = response.data['Global Quote']['05. price'];
      return price ? parseFloat(price) : null;
    } catch (error) {
      console.error("Error fetching stock price:", error);
      return null;
    }
  }, []);

  return { fetchStockPrice };
};
