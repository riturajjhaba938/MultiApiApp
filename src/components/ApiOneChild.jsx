const ApiOneChild = ({ data, loading, error }) => {
    if (loading) return <p style={{ color: 'var(--text-light)', fontStyle: 'italic' }}>Loading data please wait...</p>;
    if (error) return <p style={{ color: 'var(--api2-color)', fontWeight: 'bold' }}>{error}</p>;
    if (!data) return <p style={{ color: 'var(--text-light)' }}>No data selected. Enter a valid ID (1-10) to fetch data.</p>;

    return (
        <div>
            <h3>User Information</h3>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Username:</strong> {data.username}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Website:</strong> {data.website}</p>
        </div>
    );
};

export default ApiOneChild;
