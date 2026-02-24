const ApiOneChild = ({ data }) => {
    if (!data) return <p>No data selected. Enter an ID to fetch data.</p>;

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
