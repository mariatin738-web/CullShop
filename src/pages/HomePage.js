import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const games = [
  { id: 1, name: 'Free Fire', logo: 'freefire.png' },
  { id: 2, name: 'Mobile Legends', logo: 'mlbb.png' },
  { id: 3, name: 'PUBG Mobile', logo: 'pubg.png' }
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <header>
        <h1>VINZ CULL SHOP</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Cari game..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main>
        <div className="game-list">
          {filteredGames.map(game => (
            <div 
              key={game.id} 
              className="game-card"
              onClick={() => navigate(`/game/${game.id}`)}
            >
              <img src={`/images/${game.logo}`} alt={game.name} />
              <h3>{game.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
