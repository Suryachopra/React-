import React, { useEffect, useState } from "react";
import AddStockForm from "./components/AddStockForm";
import StockList from "./components/StockList";
import { getStocks, addStock, updateStockQuantity, getPortfolioValue } from "./api";

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  const loadData = async () => {
    try {
      const stockRes = await getStocks();
      setStocks(stockRes.data);

      const valueRes = await getPortfolioValue();
      setPortfolioValue(valueRes.data.portfolioValue); // FIXED
    } catch (error) {
      console.error("Error loading data", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Stock Portfolio</h1>
      <AddStockForm onAdd={loadData} />
      <h2>Portfolio Value: {portfolioValue}</h2>
      <StockList stocks={stocks} onUpdate={loadData} />
    </div>
  );
}
