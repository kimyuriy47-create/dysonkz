export interface ProductColor {
  id: string;
  name: string;
  nameRu: string;
  nameKz: string;
  hexPrimary: string;
  hexSecondary: string;
  badge?: string;
  badgeKz?: string;
  image: string;
  description: string;
  descriptionKz: string;
}

export interface Attachment {
  id: string;
  name: string;
  nameKz: string;
  description: string;
  descriptionKz: string;
  iconName: string;
  purpose: string;
  purposeKz: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  cityKz?: string;
  rating: number;
  date: string;
  dateKz?: string;
  colorBought: string;
  colorBoughtKz?: string;
  comment: string;
  commentKz?: string;
  verified: boolean;
  avatar: string;
  photos?: string[];
  likes: number;
}

export interface AdvantageItem {
  id: string;
  titleRu: string;
  titleKz: string;
  subtitleRu: string;
  subtitleKz: string;
  descriptionRu: string;
  descriptionKz: string;
  metric: string;
  metricLabelRu: string;
  metricLabelKz: string;
}

export interface FaqItem {
  qRu: string;
  qKz: string;
  aRu: string;
  aKz: string;
}

export interface HairstyleItem {
  id: string;
  titleRu: string;
  titleKz: string;
  subtitleRu: string;
  subtitleKz: string;
  timeRu: string;
  timeKz: string;
  descriptionRu: string;
  descriptionKz: string;
  image: string;
}

export interface OrderFormData {
  name: string;
  city: string;
  customCity?: string;
  phone: string;
  colorId: string;
  comment?: string;
  paymentMethod: 'cash_on_delivery' | 'kaspi';
}

