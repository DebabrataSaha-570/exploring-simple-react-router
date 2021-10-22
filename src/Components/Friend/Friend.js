import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, phone, website, address, id } = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    let history = useHistory();
    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>I am : {name} {id}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p>I live in {address.city}</p>
            <Link to={`/friend/${id}`}>Visit me</Link>
            <br />
            {/* bangla system  */}
            <Link to={`/friend/${id}`}>
                <button>Visit me</button>
            </Link>
            <br />
            <br />
            {/* proper way  */}
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;