
import React from 'react';

function Card({ input1, input2 }) {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p><strong>Campo 1:</strong> {input1}</p>
      <p><strong>Campo 2:</strong> {input2}</p>
    </div>
  );
}

export default Card;
