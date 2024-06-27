// src/AddProductForm.tsx
import React, { useState } from 'react';

interface AddProductFormProps {
  addProduct: (name: string, price: number) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const priceValue = parseFloat(price);
    if (name && price && priceValue > 0) {
      addProduct(name, priceValue);
      setName('');
      setPrice('');
    } else {
      alert('Por favor, ingrese un nombre y un precio positivo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio del producto"
        value={price}
        min="0"
        step="0.01"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Añadir Producto</button>
    </form>
  );
}

export default AddProductForm;

