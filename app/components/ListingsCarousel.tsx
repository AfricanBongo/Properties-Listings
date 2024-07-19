import React from 'react';
import ListingCard from "@/app/components/ListingCard";
import {ListingModel} from "@/app/model/ListingModel";

interface Props {
    listings: ListingModel[];
}

/**
 * A carousel of listings, three listings per slide
 * @param listings - the listings to display see {@link Listing}
 * @constructor
 */
const ListingsCarousel = ({listings}: Props) => {
    return (
        <div>
            <div className="carousel w-full">
                {listings.map(listing =>
                    <div
                        key={listing.id} className="carousel-item w-1/3">
                        <div className="px-4 py-4">
                            <ListingCard listing={listing}/>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default ListingsCarousel;