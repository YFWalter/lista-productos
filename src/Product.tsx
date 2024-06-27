// src/Product.tsx
import React from 'react';

interface ProductProps {
  product: { id: number; name: string; price: number };
  deleteProduct: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ product, deleteProduct }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <button onClick={() => deleteProduct(product.id)}>Eliminar Producto</button>
    </div>
  );
}

export default Product;
