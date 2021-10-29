export class Phone {
    image: string;
    name: string;
    storage_options: [string];
    colors: [string];
    price: string;
    _id: string;
    reviews: {
        customerName: string;
        reviewText: string;
        rating: number;
    }[];

    constructor(
        image: string,
        name: string,
        storage_options: [string],
        colors: [string],
        price: string,
        _id: string,
        reviews: []
    ) {
        this.image = image;
        this.name = name;
        storage_options = storage_options;
        this.colors = colors;
        this.price = price;
        this._id = _id;
        this.reviews = reviews;
    }
}
