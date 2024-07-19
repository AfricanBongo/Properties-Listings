import {ListingModel} from "@/app/model/ListingModel";

/**
 * Fetches the details for a property listing from the API.
 * @returns {Promise<ListingModel[]>} The latest properties for sale.
 */
export default async function useListingDetails(id: number): Promise<ListingModel> {
    const res = await fetch(`https://fsboafrica.com/api/properties/details/${id}`)
    const json =  await res.json()
    return json.data
}