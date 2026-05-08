import { Product } from "@/lib/types";

export const products: Product[] = [
  { id: 1, name: "Wireless Headphones", description: "Premium noise-cancelling headphones with 30hr battery life", price: 89.99, category: "Electronics", imageUrl: "https://picsum.photos/seed/headphones/400/300", stock: 12 },
  { id: 2, name: "Mechanical Keyboard", description: "Compact TKL layout with RGB backlighting and tactile switches", price: 129.99, category: "Electronics", imageUrl: "https://picsum.photos/seed/keyboard/400/300", stock: 5 },
  { id: 3, name: "Running Shoes", description: "Lightweight trail running shoes with superior grip", price: 74.99, category: "Sports", imageUrl: "https://picsum.photos/seed/shoes/400/300", stock: 23 },
  { id: 4, name: "Coffee Grinder", description: "Burr grinder with 15 grind settings for the perfect espresso", price: 49.99, category: "Kitchen", imageUrl: "https://picsum.photos/seed/grinder/400/300", stock: 8 },
  { id: 5, name: "Yoga Mat", description: "Non-slip 6mm thick mat with carrying strap", price: 34.99, category: "Sports", imageUrl: "https://picsum.photos/seed/yoga/400/300", stock: 31 },
  { id: 6, name: "Desk Lamp", description: "LED adjustable lamp with USB-C charging port built in", price: 44.99, category: "Home", imageUrl: "https://picsum.photos/seed/lamp/400/300", stock: 0 },
];