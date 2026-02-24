const CharacterCard = ({ character }) => (
    <div className="character-card">
        <img
            src={character.sprites.other['official-artwork'].front_default || character.sprites.front_default}
            alt={character.name}
            loading="lazy"
        />
        <div className="character-info">
            <div className="character-name">{character.name}</div>
            <p style={{ marginBottom: '0.25rem' }}><strong>Height:</strong> {character.height / 10}m</p>
            <p style={{ marginBottom: '0.25rem' }}><strong>Weight:</strong> {character.weight / 10}kg</p>
            <p><strong>Types:</strong> {character.types.map(t => t.type.name).join(', ')}</p>
        </div>
    </div>
);

export default CharacterCard;
