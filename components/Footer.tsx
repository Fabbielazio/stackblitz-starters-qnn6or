import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Artsy Lens</h3>
            <p className="text-sm">Capturing Moments, Crafting Memories</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400">Instagram</Link>
            <Link href="#" className="hover:text-blue-400">Facebook</Link>
            <Link href="#" className="hover:text-blue-400">Twitter</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Artsy Lens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}