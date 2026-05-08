import { Product } from "./types";
import { products } from "@/data/products";

// In-memory store (simulates a database for demo purposes)
let productStore: Product[] = [...products];

// ✅ COMPLETE: Get all products
export async function getProducts(): Promise<Product[]> {
  return productStore;
}

// ✅ COMPLETE: Get product by ID
export async function getProductById(id: number): Promise<Product | undefined> {
  return productStore.find((p) => p.id === id);
}

// ❌ INCOMPLETE: Get products by category
// TODO: implement this function
export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Copilot will suggest the implementation when you start typing
  retu
  
}

// ❌ INCOMPLETE: Search products by name
// TODO: implement this function
export async function searchProducts(query: string): Promise<Product[]> {
  
}

// ❌ INCOMPLETE: Create a new product
export async function createProduct(product: Omit<Product, "id">): Promise<Product> {
  
}

// ❌ INCOMPLETE: Update a product
export async function updateProduct(id: number, updates: Partial<Product>): Promise<Product | null> {
  
}

// ❌ INCOMPLETE: Delete a product
export async function deleteProduct(id: number): Promise<boolean> {
  
}

// ⚠️  BUG: This function has an intentional bug for the debugging demo
export async function getDiscountedPrice(productId: number, discountPercent: number): Promise<number> {
  const product = await getProductById(productId);
  // BUG: should be (1 - discountPercent / 100) but divides by 10 instead
  return product!.price * (1 - discountPercent / 10);
}