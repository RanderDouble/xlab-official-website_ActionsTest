export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  type: "text" | "image";
  imageUrl?: string;
}
