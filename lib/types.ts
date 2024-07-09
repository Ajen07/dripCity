export interface ProductsProps {
  name: string;
  price: number;
  id: string;
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
