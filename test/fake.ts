export const posts = {
  data: {
    products: {
      data: [
        {
          attributes: {
            name: 'Product name',
            description: 'description',
            category: {
              data: {
                id: '1',
                attributes: {
                  name: 'Category',
                },
              },
            },
            images: {
              data: [
                {
                  id: '19',
                  attributes: {
                    name: 'image.webp',
                    url: 'https://res.cloudinary.com/dave136/image/upload/v1689354674/image.webp',
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
};

export const postsMapped = {
  data: {
    products: [
      {
        name: 'Product name',
        description: 'description',
        category: {
          id: '1',
          name: 'Category',
        },
        images: [
          {
            id: '19',
            name: 'image.webp',
            url: 'https://res.cloudinary.com/dave136/image/upload/v1689354674/image.webp',
          },
        ],
      },
    ],
  },
};
