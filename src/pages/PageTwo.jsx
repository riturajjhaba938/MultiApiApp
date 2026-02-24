import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const PageTwo = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
                const detailedUrls = res.data.results.map(p => axios.get(p.url));
                const details = await Promise.all(detailedUrls);
                setCharacters(details.map(d => d.data));
            } catch (err) {
                console.error(err);
            }
        };
        fetchPokemon();
    }, []);

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <h2 style={{ color: 'var(--api2-color)' }}>PokéAPI Characters</h2>
                <a
                    href="https://pokeapi.co/docs/v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="route-btn"
                    style={{
                        padding: '0.75rem 1.5rem',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius)',
                        fontWeight: '600',
                        backgroundColor: 'var(--api2-color)',
                        marginLeft: 0
                    }}
                >
                    API 2 Available Routes
                </a>
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
