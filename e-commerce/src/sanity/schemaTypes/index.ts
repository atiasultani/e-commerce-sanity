import { type SchemaTypeDefinition } from 'sanity'
import mainCover from '../mainCover'
import product from '../product'
import browseDress from '../browseDress'
import topSelling from '../topSelling'
import catagory from '../catagory'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mainCover,product,topSelling,browseDress,catagory],
}
