import React, { useState } from "react";
import { addStock } from "../api";

export default function AddStockForm({ onAdd }) {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symbol || !quantity || !price) return;
    await addStock({
      symbol,
      quantity: Number(quantity),
      price: Number(price),
    });
    setSymbol("");
    setQuantity("");
    setPrice("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
