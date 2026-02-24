import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const PageTwo = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => setCharacters(res.data.results.slice(0, 10)))
            .catch(console.error);
    }, []);

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2>Rick and Morty Characters</h2>
            </div>
            <div className="characters-grid">
                {characters.map(char => (
                    <CharacterCard key={char.id} character={char} />
                ))}
            </div>
        </div>
    );
};

export default PageTwo;
