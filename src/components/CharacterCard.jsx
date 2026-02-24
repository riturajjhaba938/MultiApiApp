const CharacterCard = ({ character }) => (
    <div className="character-card">
        <img src={character.image} alt={character.name} loading="lazy" />
        <div className="character-info">
            <div className="character-name">{character.name}</div>
            <p>{character.status} - {character.species}</p>
            <p><small>{character.origin.name}</small></p>
        </div>
    </div>
);

export default CharacterCard;
