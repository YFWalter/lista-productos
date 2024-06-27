// src/ProductList.tsx
import React from 'react';
import Product from './Product';

interface ProductListProps {
  products: { id: number; name: string; price: number }[];
  deleteProduct: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, deleteProduct }) => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
}

export default ProductList;
