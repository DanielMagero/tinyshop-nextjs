import { getProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(Number(params.id));

  if (!product) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <span className="text-sm text-gray-400 uppercase tracking-wider">{product.category}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
          <p className="text-gray-600 mt-3">{product.description}</p>
          <div className="mt-6">
            <span className="text-4xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
          </div>
          {/* TODO: Add stock status display */}
          {/* TODO: Add "Add to Cart" button with quantity selector */}
        </div>
      </div>
    </div>
  );
}