// src/App.jsx
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import { StockProvider } from './context/StockContext';
import './App.css';

const App = () => {
  return (
    <StockProvider>
      <div className="app">
        <h1>Finance Dashboard</h1>
        <StockForm />
        <StockList />
      </div>
    </StockProvider>
  );
};

export default App;
