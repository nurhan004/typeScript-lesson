import React from 'react';

interface DataType {
  name: string;
  price: number;
  discount: number;
  description: string;
  image: string;
}
interface  CardProps{
    data: DataType;
}

function Card({data}: CardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', width: '200px' }}>
      <img src={data.image} style={{ width: '190px', height: '180px', objectFit: 'cover' }} />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <p>Discount: {data.discount}%</p>
    </div>
  );
}

export default Card;
