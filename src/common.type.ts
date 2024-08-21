export interface producttype { 
  id:number;
  src:string;
  subtitle: string;
  title:string;
  price:number;
  qty:number;
  discription:string;
}
type UUID = string;

export interface User {
  id: UUID;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  role?: string;
  image?: string | null; // URL or base64 string
  is_active: boolean;
  is_staff: boolean;
}

export interface CustomerList {
  id: UUID;
  store: UUID;
  user: UUID;
}

export interface Address {
  id: UUID;
  house_number?: string;
  street_number?: string;
  village?: string;
  commune?: string;
  district?: string;
  city?: string;
  postal_code?: string;
  country?: string;
  phone_number?: string;
  user?: UUID;
}

export interface Store {
  id: UUID;
  seller?: UUID;
  name: string;
  address?: UUID;
  email?: string;
  logo?: string | null; // URL or base64 string
}

export interface ProductCategory {
  id: UUID;
  parent_category?: UUID;
  category_name: string;
  image?: string | null; // URL or base64 string
}

export interface Variations {
  id: UUID;
  category?: UUID;
  attribute_type?: string;
}

export interface VariationOption {
  id: UUID;
  variation: UUID;
  value?: string;
}

export interface Product {
  id: UUID;
  product_id?: string;
  name: string;
  short_description?: string;
  description?: string;
  price: number;
  store?: UUID;
  image?: string | null; // URL or base64 string
  categories: UUID[];
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

export interface ProductImage {
  id: UUID;
  product: UUID;
  image?: string | null; // URL or base64 string
  angle?: string;
}

export interface ProductItem {
  id: UUID;
  product: UUID;
  variation_option?: UUID;
}

export interface Stock {
  id: UUID;
  quantity: number;
  product_item_variation?: UUID;
  store?: UUID;
}

export interface UserReview {
  id: UUID;
  user?: UUID;
  product?: UUID;
  comment: string;
  rating?: number;
}

export interface Draft {
  id: UUID;
  store?: UUID;
  product?: UUID;
}

export interface Publish {
  id: UUID;
  store?: UUID;
  product?: UUID;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

export interface Promotion {
  id: UUID;
  name: string;
  description: string;
  discount_percentage: number;
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  categories: UUID[];
  start_at: string; // ISO date string
  end_at: string; // ISO date string
}

export interface PromotionCategory {
  id: UUID;
  category: UUID;
  promotion: UUID;
}

export interface ShoppingCartItem {
  id: UUID;
  customer?: UUID;
  product: UUID;
  qty: number;
}

export interface PaymentType {
  id: UUID;
  type_value: string;
}

export interface UserPaymentMethod {
  id: UUID;
  user?: UUID;
  payment_type: UUID;
  provider: string;
  card_number: string;
  expiry_date: string; // ISO date string
}

export interface ShopOrder {
  id: UUID;
  user?: UUID;
  order_date: string; // ISO date string
  payment_method: UUID;
  shipping_address: string;
  shipping_method?: UUID;
  order_total: number;
  status?: 'pending' | 'processing' | 'completed' | 'delivered';
}

export interface OrderLine {
  id: UUID;
  product_item: UUID;
  order: UUID;
  quantity: number;
  price: number;
}

export interface OrderHistory {
  id: UUID;
  user: UUID;
  order: UUID;
}

export interface ShippingMethod {
  id: UUID;
  name: string;
  price: number;
}

export interface Favourite {
  id: UUID;
  user: UUID;
  product: UUID;
}
