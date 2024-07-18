interface Image {
    filePath: string;
}

/**
 * A property that either be sold or rented out.
 */
export interface Listing {
    id: number;
    title: string;
    description: string;
    status: string;
    type: string;
    currency: string;
    price: string;
    publishedAs: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    propertySize: string;
    yearBuilt: number;
    images: Image[];
}