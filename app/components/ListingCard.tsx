import {ListingModel} from "@/app/model/ListingModel";
import IconButton from "@/app/components/IconButton";
import Link from "next/link";
import Image from "next/image";

interface Props {
    listing: ListingModel;
}

/**
 * Displays summarised details of a property listing on the home page of the website.
 * @param listing The property listing to display.
 * @constructor
 */
const ListingCard = ({listing}: Props) => {
    return <div
        className="max-w-md m-0 flex flex-col bg-white rounded-2xl shadow-xl overflow-clip border-2 border-gray-200">

        {/* ListingModel image */}
        <img src={listing.images[0].filePath} alt={listing.title}
             className="w-full h-64 object-cover"/>
        <div className="w-full px-4 py-4 space-y-2 leading-snug text-gray-600">
            {/* ListingModel type*/}
            <p>{listing.type}</p>

            {/* ListingModel title*/}
            <p className="text-lg font-semibold leading-snug">{listing.title}</p>

            {/* ListingModel address*/}
            <p className="">{listing.address}</p>

            {/* ListingModel amenities*/}
            <div className="w-full flex flex-row space-x-4">
                <p>{`Bed: ${listing.bedrooms}`}</p>
                <p>{`Baths: ${listing.bathrooms}`}</p>
                <p>{`${listing.propertySize}`}</p>
            </div>
        </div>

        <div className="divider m-0"/>
        <div className="w-full px-4 pt-1 pb-3 flex flex-row justify-between items-center space-y-1">
            <div className="flex flex-row space-x-2">
                {/* WhatsApp Icon Button*/}
                <IconButton>
                    <i className="bi bi-whatsapp text-red-400"></i>
                </IconButton>

                {/* Telephone Icon Button*/}
                <IconButton>
                    <i className="bi bi-telephone text-red-400"></i>
                </IconButton>

                {/* Email Icon Button*/}
                <IconButton>
                    <i className="bi bi-at text-lg text-red-400"></i>
                </IconButton>
            </div>

            <Link href={`/listing/${listing.id}`}
                  className="btn btn-md btn-outline rounded-2xl border-red-400 text-red-400">
                Details
            </Link>
        </div>
    </div>;
}

export default ListingCard;