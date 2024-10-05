// src/components/StockList.jsx
import { useContext } from 'react';
import { StockContext } from '../context/StockContext';

const StockList = () => {
  const { stocks } = useContext(StockContext);

  if (stocks.length === 0) {
    return <p>No stocks added yet.</p>;
  }

  return (
    <div className="stock-list">
      <h2>Stock List</h2>
      {stocks.map((stock, index) => {
        const profitLoss = (stock.currentPrice - stock.purchasePrice) * stock.quantity;
        const profitLossClass = profitLoss >= 0 ? 'positive' : 'negative';

        return (
          <div key={index} className="stock-item">
            <h4>Symbol: {stock.symbol}</h4>
            <p>Quantity: {stock.quantity}</p>
            <p>Purchase Price: ${stock.purchasePrice}</p>
            <p>Current Price: ${stock.currentPrice}</p>
            <p className={`profit-loss ${profitLossClass}`}>
              Profit/Loss: {profitLoss >= 0 ? `+${profitLoss.toFixed(2)}` : profitLoss.toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StockList;
