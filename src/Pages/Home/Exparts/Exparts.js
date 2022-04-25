import React from 'react';
import expert1 from '../../../expert-1.jpg';
import expert2 from '../../../expert-2.jpg';
import expert3 from '../../../expert-3.jpg';
import expert4 from '../../../expert-4.jpg';
import expert5 from '../../../expert-5.jpg';
import expert6 from '../../../expert-6.png';
import Expart from '../Expart/Expart';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Chris Rock', img: expert2 },
    { id: 3, name: 'Dwyne Rock', img: expert3 },
    { id: 4, name: 'Messy Vai', img: expert4 },
    { id: 5, name: 'Ronaldo Bro', img: expert5 },
    { id: 6, name: 'Masut Azil', img: expert6 },
]

const Exparts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-center m-5'>Our Experts</h2>

            <div className="row">
                {
                    experts.map(expart => <Expart
                        expart={expart}
                        key={expart.id}
                    ></Expart>)
                }
            </div>

        </div>
    );
};

export default Exparts;