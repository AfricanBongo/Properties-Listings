import React from 'react';
import useListingDetails from "@/app/hooks/useListingDetails";
import NavHeader from "@/app/components/NavHeader";
import ListingPageTitle from "@/app/components/ListingPageTitle";

/**
 * A dynamically routed page that displays the details of a property listing.
 * @param params
 * @constructor
 */
const Page = async ({params}: {
    params: { id: string }
}) => {
    const listing = await useListingDetails(parseInt(params.id as string));

    return (
        <main className="min-h-svh flex flex-col items-center bg-gray-50">
            <NavHeader/>
            <div className="w-full max-w-screen-xl flex flex-wrap space-y-10 mx-12 mt-10">
                <ListingPageTitle listing={listing}/>
                <div className="w-full flex flex-wrap space-x-2">
                    <div className="min-w-56 flex flex-col flex-grow-5 space-y-2">
                        <img src={listing.images[0].filePath} alt={listing.title} className="w-full"/>
                        <div className="w-full flex flex-col p-4 space-x-4 rounded-xl bg-white outline outline-1 outline-gray-300">
                            <p className="text-lg font-semibold">Description</p>
                            <p>{listing.description}</p>
                        </div>
                    </div>
                    <div className="max-w-48 min-h-96 flex flex-grow-4 rounded-xl bg-white outline outline-1 outline-gray-300">

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;