import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Artsy Lens
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-200">Services</Link></li>
          <li><Link href="/portfolio" className="hover:text-blue-200">Portfolio</Link></li>
          <li><Link href="/about" className="hover:text-blue-200">About</Link></li>
          <li><Link href="/blog" className="hover:text-blue-200">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-blue-200">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}