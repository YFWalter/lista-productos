// src/App.tsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

interface Product {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Producto 1', price: 29.99 },
    { id: 2, name: 'Producto 2', price: 19.99 },
    { id: 3, name: 'Producto 3', price: 39.99 },
    { id: 4, name: 'Producto 4', price: 49.99 },
  ]);

  const addProduct = (name: string, price: number) => {
    const newProduct: Product = {
      id: products.length + 1,
      name,
      price,
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Productos</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default App;
