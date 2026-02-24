import { useState } from 'react';
import axios from 'axios';
import ApiOneChild from './ApiOneChild';

const ApiOneParent = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState(null);

    const fetchUser = async () => {
        if (!id) return;
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setData(res.data);
        } catch {
            setData(null);
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
                <button onClick={fetchUser}>Fetch API 1</button>
            </div>

            <div className="section">
                <ApiOneChild data={data} />
            </div>
        </div>
    );
};

export default ApiOneParent;
