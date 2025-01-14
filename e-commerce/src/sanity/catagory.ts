import { defineField, defineType } from "sanity";

const catagory= defineType({
  name: "category", // Fixed the typo from "catogry" to "category"
  type: "document",
  title: "Category",
  fields: [ // Lowercase "fields"
    defineField({
      name: "topSelling", // Use camelCase and avoid spaces
      type: "string",
      title: "Top Selling",
    }),
    defineField({
      name: "dressStyle", // Use camelCase
      type: "string",
      title: "Product Description",
    }),
  ],
});
export default catagory 