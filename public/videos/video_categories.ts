// !!!IMPORTANT!!!
// name must be unique!

import { CategoryVideosType } from "@/utils/CategoryVideosType";


export const videos: CategoryVideosType[] = [
    {
        name: "natura",
        videos: [
            "/videos/video-1.mp4",
            "/videos/video-2.mp4",
        ],
        thumbnail: "/videos/thumbnails/natura.png"
    },
    {
        name: "feste",
        videos: [
            "/videos/video-3.mp4",
            "/videos/video-4.mp4",
        ],
        thumbnail: "/videos/thumbnails/feste.png"
    }
]