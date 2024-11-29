import React, { useEffect, useState } from 'react'

const WithLoaderAndError = (Component, fetchUsers) => {

    const EnhancedComponents = () => {
        const [userList, updateUsers] = useState([]);
        const [loading, updateLoading] = useState(true);
        const [error, updateError] = useState();


        useEffect(() => {
            fetchAndSetUsers();
        }, []);

        const fetchAndSetUsers = async () => {
            try {
                const users = await fetchUsers();
                updateUsers(users);
            } catch (error) {
                updateError(error?.message || 'Something went wrong')
            } finally {
                updateLoading(false);
            }
        }

        if (loading) return <div>loading....</div>
        if (error) return <div>{error}</div>
        return <Component userList={userList} />;
    }
    return EnhancedComponents;
}

export default WithLoaderAndError;