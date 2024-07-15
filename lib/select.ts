export const catalogProductSelect = {
  id: true,
  name: true,
  price: true,
  description: true,
  isActive: true,
  isFeatured: true,
  isArchived: true,
  inventory: true,
  imageUrls: {
    select: {
      url: true,
      type: true,
    },
  },
};
