export default {
    name: 'video',
    title: 'Video',
    type: "document",
    fields: [{
        name: 'video',
        title: 'Video',
        type: 'file'
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
        to: [{type: 'video_category'}]
    },
    ]
}