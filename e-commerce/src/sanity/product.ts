
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Product Name',
    },{
      name: 'description',
      type: 'string',
      title: 'Product description',
  },{
    name: 'Image',
    type: 'image',
    title: 'Image',
    options:{hotspot:true}
}]};
  