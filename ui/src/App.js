import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [balance, setBalance] = useState(0);
    const [goods, setGoods] = useState([
        { id: 1, name: 'Soda', price: 1.5 },
        { id: 2, name: 'Chips', price: 2.0 },
        { id: 3, name: 'Candy', price: 1.0 },
        { id: 4, name: 'Water', price: 1.0 },
        { id: 5, name: 'Juice', price: 1.8 },
        { id: 6, name: 'Chocolate', price: 1.2 },
        { id: 7, name: 'Gum', price: 0.5 },
        { id: 8, name: 'Cookies', price: 2.5 },
        { id: 9, name: 'Crackers', price: 1.3 },
        { id: 10, name: 'Mints', price: 0.8 },
        { id: 11, name: 'Popcorn', price: 1.7 },
        { id: 12, name: 'Pretzels', price: 1.6 },
        { id: 13, name: 'Tea', price: 1.4 },
        { id: 14, name: 'Coffee', price: 2.0 },
        { id: 15, name: 'Energy Drink', price: 2.5 },
        { id: 16, name: 'Protein Bar', price: 1.9 }
    ]);

    useEffect(() => {
        fetch('/api/balance')
            .then(response => response.json())
            .then(data => setBalance(data.currentBalance))
            .catch(error => console.error('Error fetching balance:', error));
    }, [balance]);
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the Vending Machine</h1>
                <p>Current balance: ${balance.toFixed(2)}</p>
            </header>
            <div className="container">
                <div className="row">
                    {goods.map((item, index) => (
                        <div className="col-3 mb-4" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price.toFixed(2)}</p>
                                    <button className="btn btn-primary">Buy</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
