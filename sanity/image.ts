export default {
    name: 'gallery_image',
    title: 'Image',
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
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: [{type: 'image_category'}]
    },
    ]
}