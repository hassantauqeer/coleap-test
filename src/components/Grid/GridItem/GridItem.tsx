import React from 'react';
import {IGridItem} from '../../../types/vehicles';

const GridItem = ({id, price, model, photo, make, onClick}: IGridItem) => {
    return (
        <div onClick={onClick} className="max-w-sm rounded overflow-hidden shadow-lg" key={id}>
            <img className="w-full" src={photo} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    The Coldest Sunset <strong>{model}</strong> model
                </div>
                <p className="text-gray-700 text-base">
                    In By&nbsp;
                    <strong>
                        {make} and worth about {price}.
                    </strong>
                </p>
            </div>
        </div>
    )
}
export default GridItem;
