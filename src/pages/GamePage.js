import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GamePage.css';

const diamondOptions = [
  { id: 1, amount: '50 Diamond', price: 15000 },
  { id: 2, amount: '100 Diamond', price: 28000 },
  { id: 3, amount: '200 Diamond', price: 50000 }
];

function GamePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find(g => g.id === parseInt(id));

  return (
    <div className="game-page">
      <header>
        <h1>{game?.name} Top Up</h1>
        <button onClick={() => navigate(-1)}>Kembali</button>
      </header>

      <main>
        <div className="diamond-options">
          {diamondOptions.map(option => (
            <div 
              key={option.id} 
              className="diamond-card"
              onClick={() => navigate(`/checkout/${game.id}/${option.id}`)}
            >
              <h3>{option.amount}</h3>
              <p>Rp {option.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default GamePage;
