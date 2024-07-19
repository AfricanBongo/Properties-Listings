import React from 'react';

interface Props {
    onSelected: () => void;
}

const ButtonsJoin = ({onSelected}: Props) => {
    return (
        <div className="join self-start p-1 space-x-1 bg-white rounded-3xl">
            <input className="btn join-item h-10" type="radio" name="saleType" aria-label="For Sale"/>
            <input className="btn join-item h-10" type="radio" name="saleType" aria-label="To Rent"/>
        </div>
    );
};

export default ButtonsJoin;