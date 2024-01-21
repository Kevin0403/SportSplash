import React, { useEffect, useState } from 'react';
import { Player } from '../index';

function Players({
    id,
    isAdmin
}) {

    const [data, setData] = useState([]);
    const [admin, setAdmin] = useState(false);

    // Fetch data of players and display it.
    useEffect(() => {
        setData([
            {
                id: 1,
                name: "player1",
            },
            {
                id: 2,
                name: "player2",
            },
            {
                id: 3,
                name: "player3",
            },
        ])
    }, []);

    return (
        <div>
            <ul>
                {/* TODO: Add content of players here */}
                {data.map((player) => (
                    <li key={player.id}>
                        <Player {...player} isAdmin={isAdmin} teamId={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Players;
