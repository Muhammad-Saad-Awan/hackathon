export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
        description: 'Unique identifier for the product',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
          source: "name", // or any field that generates the slug
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      {
        name: 'imagePath',
        title: 'Image Path',
        type: 'url',
        description: 'Provide an image URL if no image is uploaded',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
      },
      {
        name: 'isFeaturedProduct',
        title: 'Is Featured Product',
        type: 'boolean',
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  };
  