import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CheckoutPage.css';

const paymentMethods = [
  { id: 1, name: 'DANA', logo: 'dana.png' },
  { id: 2, name: 'GoPay', logo: 'gopay.png' },
  { id: 3, name: 'QRIS', logo: 'qris.png' }
];

function CheckoutPage() {
  const { gameId, optionId } = useParams();
  const [playerId, setPlayerId] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);

  const game = games.find(g => g.id === parseInt(gameId));
  const option = diamondOptions.find(o => o.id === parseInt(optionId));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses pembayaran
    alert(`Pembelian ${option.amount} untuk ${game.name} sedang diproses!`);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="game-info">
          <h2>{game?.name} - {option?.amount}</h2>
          <p>Rp {option?.price.toLocaleString()}</p>
        </div>

        <div className="form-group">
          <label>ID Player:</label>
          <input 
            type="text" 
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
            required
          />
        </div>

        <div className="payment-methods">
          <h3>Metode Pembayaran:</h3>
          {paymentMethods.map(method => (
            <div 
              key={method.id}
              className={`payment-card ${selectedPayment === method.id ? 'selected' : ''}`}
              onClick={() => setSelectedPayment(method.id)}
            >
              <img src={`/images/${method.logo}`} alt={method.name} />
              <span>{method.name}</span>
            </div>
          ))}
        </div>

        <button type="submit" disabled={!selectedPayment}>
          Bayar Sekarang
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
