import axios from "axios";

const API_BASE = "https://localhost:51572/api/stocks";

export const getStocks = () => axios.get(API_BASE);

export const addStock = (data) => axios.post(API_BASE, data);

export const updateStockQuantity = (symbol, quantity) =>
  axios.put(`${API_BASE}/${symbol}`, { quantity });

export const getPortfolioValue = () => axios.get(`${API_BASE}/portfolio/value`);