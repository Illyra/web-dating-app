import React, { useEffect, useState } from 'react';
import '../css/DatingCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../Components/axios.js';

function DatingCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/web-dating-app/Cards');

            setPeople(req.data);
        }

        fetchData();
    },
        []);

    const swiped = (direction, nametoDelete) => {
        console.log('removing ' + nametoDelete);
        setLastDirection(direction);
    };
    const outOfFrame = (Name) => {
        console.log(Name + " left the screen!");
    };

    const [LastDirection, setLastDirection] = useState();

    return (
        <div>
            <div className="datingCards_Container">
                {people.map((person) => (
                    <TinderCard className='swipe'
                        key={person.Name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.Name)}
                        onCardLeftScreen={() => outOfFrame(person.Name)}>
                        <div style={{ backgroundImage: `url(${person.imageURL})` }}
                            className='card'>
                            <h3>
                                {person.Name}
                            </h3>
                        </div>
                    </TinderCard>
                ))}

                <div className = 'Last_Swipe'>
                    {LastDirection ? <p>You swiped {LastDirection}</p> : <p/>}
                </div>
            </div>
        </div>
    );
}

export default DatingCards