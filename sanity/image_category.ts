export default {
    name: 'image_category',
    title: 'Image Category',
    type: "document",
    fields: [{
        name: 'image',
        title: 'Image',
        type: 'image'
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
    ]
}