export default {
    name: 'product',
    title: 'Product',
    type: "document",
    fields: [{
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
            hotspot: true,
        }
    },
    {
        name: 'name',
        title: 'Name',
        type: 'string'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 90
        }
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number'
    },
    {
        name: 'detail',
        title: 'Detail',
        type: 'text'
    },
    {
        name: 'category',
        title: "Category",
        type: 'string',
        options: {
            list: [
                { title: "Clothes", value: "clothes" },
                { title: "Accessories", value: "accessories" },
                { title: "ICANDO", value: "icando" },
                { title: "Most wanted", value: "most_wanted" },
            ],
        },
    },
    {
        name: 'color',
        title: "Color",
        type: 'string',
        options: {
            list: [
                { title: "White", value: "white" },
                { title: "Black", value: "black" },
            ],
        },
    }
    ]
}