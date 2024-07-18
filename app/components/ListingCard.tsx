import {Listing} from "@/app/model/Listing";
import WellRoundedButton from "@/app/components/IconButton";

interface Props {
    listing: Listing;
}


const ListingCard = ({ listing }: Props) => {
    return <div className="max-w-96 m-0 flex flex-col rounded-2xl shadow-xl overflow-clip border-2 border-gray-200">

        {/* Listing image */}
        <img src={listing.images[0].filePath} alt={listing.title}
             className="w-full h-64 object-cover"/>

        <div className="w-full px-4 py-4 space-y-2 leading-snug text-gray-600">
            {/* Listing type*/}
            <p>{listing.type}</p>

            {/* Listing title*/}
            <p className="text-lg font-semibold leading-snug">{listing.title}</p>

            {/* Listing address*/}
            <p className="">{listing.address}</p>

            {/* Listing amenities*/}
            <div className="w-full flex flex-row space-x-4">
                <p>{`Bed: ${listing.bedrooms}`}</p>
                <p>{`Baths: ${listing.bathrooms}`}</p>
                <p>{`${listing.propertySize}`}</p>
            </div>
        </div>

        <div className="divider m-0"/>
        <div className="w-full px-4 pt-1 pb-3 space-y-1 flex flex-row justify-between">
            <div className="flex flex-row space-x-2">

                {/* WhatsApp Icon Button*/}
                <WellRoundedButton>
                    <i className="bi bi-whatsapp text-red-400"></i>
                </WellRoundedButton>

                {/* Telephone Icon Button*/}
                <WellRoundedButton>
                    <i className="bi bi-telephone text-red-400"></i>
                </WellRoundedButton>

                {/* Email Icon Button*/}
                <WellRoundedButton>
                    <i className="bi bi-at text-lg text-red-400"></i>
                </WellRoundedButton>
            </div>

            <WellRoundedButton additionalClasses="px-4">
                Details
            </WellRoundedButton>
        </div>
    </div>;
}

export default ListingCard;