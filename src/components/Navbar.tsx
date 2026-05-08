import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">🛍️ TinyShop</Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600">Products</Link>
          <Link href="/cart" className="hover:text-blue-600">Cart</Link>
        </div>
      </div>
    </nav>
  );
}