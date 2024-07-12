export interface ProductsProps {
  name: string;
  price: number;
  id: string;
}
export interface CatalogProductsProps {
  name: string;
  price: number;
  id: string;
  inventory: number;
  category: string;
  description: string;
  isFeatured: boolean;
  isActive: boolean;
  isArchived: boolean;
  imageUrls: ImageUrlProps[];
}

export interface CatalogProduct {
  name: string;
  price: number;
  id: string;
  inventory: number;
  category: string;
  description: string;
  isFeatured: boolean;
  isActive: boolean;
  isArchived: boolean;
  imageUrls: ImageUrlProps[];
}

export interface ImageUrlProps {
  url: string;
  type: string;
}

export interface RadioFilterProps {
  name: string;
  value: string;
}

export interface InputWithLabelProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}
