import React, { useState } from 'react';
import axios from 'axios';
import Image from './components/Image';
import Stats from './components/Stats';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [superhero, setSuperhero] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    const token = 'fe375175dffd27dffd49230ddf2134c4';
    try {
      const response = await axios.get(`https://cors-proxy-superhero-api.onrender.com/${token}/getByName/${name}`);
      setSuperhero(response.data.results[0]);
    } catch (error) {
      console.error('Error fetching superhero data', error);
    }
  };

  return (
    <div className="App">
      <h1>Superhero Details</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter superhero name"
        />
        <button type="submit">Search</button>
      </form>
      {superhero && (
        <div className="superhero-container">
          <Image src={superhero.image.url} />
          <Stats stats={superhero.powerstats} />
        </div>
      )}
    </div>
  );
};

export default App;
