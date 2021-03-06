import React, { useContext } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
import { RateContext } from '../../context/RateContext';

const Cards = () => {
    const { cards, editHandler, deleteHandler } = useContext(RateContext);

    return (
        <div>
            <h1 className='Title'>Tarjetas creadas</h1>
            <div className='grid'>
                {cards.map(({ title, description, url }, index) => (
                    <Card
                        key = {index}
                        title={title}
                        index={index}
                        description = {description}
                        url={url}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    />
                ))}
            </div>
        </div>
    )   
}

export default Cards;