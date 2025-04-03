import React from 'react';
import Card from "../components/Card/Card.tsx";

let products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    discount: 13,
    description: 'This is product 1 description',
    image: 'https://twam.ru/wp-content/uploads/2024/02/mens-fizik-1.webp'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15.99,
    discount: 10,
    description: 'This is product 2 description',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkJ1rQ1E0Rvj43nqwwfRuYhjGOcTJqT_k2g&s'
  }
];

function Home() {
  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
        {products.map((product) => (  
          <Card
            key={product.id}
            data={product}
            // name={product.name}
            // price={product.price}
            // discount={product.discount}
            // description={product.description}
            // image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
