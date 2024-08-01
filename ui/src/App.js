import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        fetch('/api/balance')
            .then(response => response.json())
            .then(data => setBalance(data.currentBalance))
            .then(() => console.log('Balance fetched. Current balance:', balance))
            .catch(error => console.error('Error fetching balance:', error));
    }, [balance]);
    return (
        <div className="App">
        <header className="App-header">
            <h1>Welcome to the Vending Machine</h1>
            <p>Current balance ${balance.toFixed(1)}</p>
        </header>
        </div>
    );
}

export default App;
