import {ListingModel} from "@/app/model/ListingModel";
import Link from "next/link";
import React from "react";

interface Props {
    listing: ListingModel
}

const ListingPageTitle = ({listing: {title, address, currency, price, status}}: Props) => {
    return <div className="w-full flex flex-row flex-wrap items-end space-y-2">
        <div className="flex flex-col flex-grow-3">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>{address}</p>
        </div>
        <p className="text-lg">{`${currency}$${price}${status === "Rental" ? "/mo" : ""}`}</p>
        <div className="flex flex-row flex-grow-2 space-x-1.5 justify-end">
            <Link href="https://facebook.com" className="px-1.5 py-0.5 justify-center items-center bg-blue-800">
                <i className="bi bi-facebook text-sm text-white"/>
            </Link>
            <Link href="https://whatsapp.com" className="px-1.5 py-0.5 justify-center items-center bg-green-500">
                <i className="bi bi-whatsapp text-sm text-white"/>
            </Link>
            <Link href="https://linkedin.com" className="px-1.5 py-0.5 justify-center items-center bg-blue-500">
                <i className="bi bi-linkedin text-sm text-white"/>
            </Link>
            <Link href="https://x.com" className="px-1.5 py-0.5 justify-center items-center bg-black">
                <i className="bi bi-twitter-x text-sm text-white"/>
            </Link>
            <Link href="https://mail.com" className="px-1.5 py-0.5 justify-center items-center bg-gray-500">
                <i className="bi bi-envelope text-sm text-white"/>
            </Link>
        </div>
    </div>;
}

export default ListingPageTitle