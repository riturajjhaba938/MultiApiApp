import { useState } from 'react';
import axios from 'axios';
import ApiOneChild from './ApiOneChild';

const ApiOneParent = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        if (!id) {
            setError("Please enter a valid User ID (e.g., 1-10) before fetching.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setData(res.data);
        } catch (err) {
            setData(null);
            setError("Failed to fetch user. Ensure the ID exists (1-10) or try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home-split">
            <div className="section">
                <h2>Fetch User Data</h2>
                <input
                    type="number"
                    placeholder="Enter ID (1-10)"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
                    <button onClick={fetchUser} disabled={loading}>
                        {loading ? 'Loading...' : 'Fetch API 1'}
                    </button>
                    <a
                        href="https://jsonplaceholder.typicode.com/users"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="route-btn"
                        style={{
                            padding: '0.75rem 1.5rem',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius)',
                            fontWeight: '600'
                        }}
                    >
                        Available Routes
                    </a>
                </div>
            </div>

            <div className="section">
                <ApiOneChild data={data} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default ApiOneParent;
