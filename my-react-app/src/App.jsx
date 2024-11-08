
import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (input1.length < 3 || input1.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(false);
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(false);
      return;
    }

    // Si pasa las validaciones
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Formulario de Preferencia</h1>

      <form onSubmit={handleSubmit}>
        <label>Campo 1:</label>
        <input 
          type="text" 
          value={input1} 
          onChange={(e) => setInput1(e.target.value)} 
        />

        <label>Campo 2:</label>
        <input 
          type="text" 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)} 
        />

        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {submitted && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;
