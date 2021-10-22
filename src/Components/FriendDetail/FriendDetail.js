import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

const FriendDetail = () => {
    const { friendId } = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFriend(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h3>Friend Detail of {friendId}</h3>
            <h1>Name: {friend.name}</h1>
            <h2>phone: {friend.phone}</h2>
            <h4>Website: {friend.website}</h4>
            <p>Works at: {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;