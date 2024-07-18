import useListings from "@/app/hooks/useListings";
import {Listing} from "@/app/model/Listing";
import React from "react";
import ListingCard from "@/app/components/ListingCard";

export default async function Home() {
    const listings: Listing[] = await useListings();
    const listing = listings[0]

    return (<main>
        <div className="w-full py-8 px-6">
            {/* Property Card Starts Here*/}
            <ListingCard listing={listing}/>
        </div>
    </main>)
}
