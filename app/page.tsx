import useListings from "@/app/hooks/useListings";
import {ListingModel} from "@/app/model/ListingModel";
import React from "react";
import ListingsCarousel from "@/app/components/ListingsCarousel";
import NavHeader from "@/app/components/NavHeader";
import PropertyTypesDropdown from "@/app/components/PropertyTypesDropdown";
import ButtonsJoin from "@/app/components/ButtonsJoin";

const Home = async () => {
    const forSaleListings: ListingModel[] = await useListings("sale");
    const toRentListings: ListingModel[] = await useListings("rent");

    return (<main>
        <NavHeader/>
        <div className="hero"
             style={{
                 backgroundImage: "url(https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                 minHeight: "520px"
        }}>
            <div className="hero-overlay bg-opacity-70 bg-black"/>
            <div className="hero-content w-full max-w-4xl flex-col">
                <ButtonsJoin />
                <div className="flex flex-row w-full h-24 px-3 py-5 bg-white rounded-lg gap-1">
                    <PropertyTypesDropdown onTypeSelected={(value) => console.log(value)}/>
                    <input type="text" placeholder="Suburb, City, Province, Country"
                           className="input input-bordered px-2 h-full flex-grow border-gray-300"/>
                    <button className="btn btn-primary btn-error h-full bg-red-600 text-white">
                        <i className="bi bi-search"/>
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-full max-w-screen-xl py-8 px-12 space-y-6">
                <h2 className="text-2xl font-medium">Properties for sale</h2>
                <ListingsCarousel listings={forSaleListings}/>
            </div>
        </div>
        <div className="flex justify-center v-screen">
            <div className="w-full max-w-screen-xl py-8 px-12 space-y-6">
                <h2 className="text-2xl font-medium">Properties for rent</h2>
                <ListingsCarousel listings={toRentListings}/>
            </div>
        </div>
    </main>)
}

export default Home;
