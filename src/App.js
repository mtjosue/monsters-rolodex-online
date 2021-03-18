import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const filteredMonsters = monsters.filter((monster) =>
    monster.username.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    const getMonsters = async () => {
      const monstersFromJSONServer = await fetchMonsters();
      setMonsters(monstersFromJSONServer);
    };
    getMonsters();
  }, []);

  const fetchMonsters = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <Header text="Monsters Rolodex 1" />
      <SearchBox onChange={handleChange} placeHolder="Search Monsters!" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
