import {Listing} from "@/app/model/Listing";

/**
 * Fetches the latest properties for sale from the API.
 * @returns {Promise<Listing[]>} The latest properties for sale.
 */
export default async function useListings(type: "sale" | "rent" = "sale"): Promise<Listing[]> {
    const appendUrl = type === "sale" ? "for-sale?search=for-sale" : "to-rent?search=to-rent"
    const res = await fetch(`https://fsboafrica.com/api/properties/${appendUrl}`)
    const json =  await res.json()
    return json.data
}