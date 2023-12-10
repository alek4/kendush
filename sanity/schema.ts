import { type SchemaTypeDefinition } from 'sanity'

import product from './product'
import video from './video'
import video_category from './video_category'
import image_category from './image_category'
import image from './image'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, video, video_category, image, image_category],
}
