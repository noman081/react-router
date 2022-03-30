import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/friend/' + id);
    }
    return (
        <div className='my-4 border-2 p-5'>
            <h1 className="text-4xl">{name}</h1>
            <button className='p-4 bg-blue-600 rounded-lg my-2 text-white hover:bg-pink-600' onClick={handleButton}>{username}</button>
        </div>
    );
};

export default Friend;