import React, { useState } from "react";
import { updateStockQuantity } from "../api";

export default function StockList({ stocks, onUpdate }) {
  const [editQty, setEditQty] = useState({});

  const handleUpdate = async (symbol) => {
    await updateStockQuantity(symbol, Number(editQty[symbol]));
    setEditQty({ ...editQty, [symbol]: "" });
    onUpdate();
  };

  return (
    <table border="1" cellPadding="5" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Avg Price</th>
          <th>Current Price</th>
          <th>Value</th>
          <th>Update Quantity</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((s) => (
          <tr key={s.symbol}>
            <td>{s.symbol}</td>
            <td>{s.quantity}</td>
            <td>{s.averagePrice}</td>
            <td>{s.currentPrice}</td>
            <td>{s.value}</td>
            <td>
              <input
                type="number"
                value={editQty[s.symbol] || ""}
                onChange={(e) =>
                  setEditQty({ ...editQty, [s.symbol]: e.target.value })
                }
              />
              <button onClick={() => handleUpdate(s.symbol)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
