import { Product } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        {/* TODO: Add a "Low Stock" badge when stock < 5 and "Out of Stock" when stock === 0 */}
      </div>
      <div className="p-4">
        <span className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</span>
        <h3 className="font-semibold text-gray-900 mt-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</span>
          <Link href={`/products/${product.id}`}
            className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}