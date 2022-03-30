import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    const { name, email, phone, website, address } = friend;
    return (
        <div>
            <h1 className="text-4xl text-blue-800">
                The details of {name} is:
            </h1>
            <h1 className='text-2xl'>Name: {name}</h1>
            <h1 className='text-xl'>Email: {email}</h1>
            <h1 className='text-xl'>Phone: {phone}</h1>
            <h1 className='text-xl'>Website: {website}</h1>
            <h1 className='text-xl'>City: {address?.city}</h1>
        </div>
    );
};

export default FriendDetails;