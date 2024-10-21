import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-5xl font-bold text-center mb-4">Welcome to Artsy Lens</h1>
        <p className="text-xl text-center mb-8">"Capturing Moments, Crafting Memories"</p>
        <p className="text-lg text-center mb-8">
          At Artsy Lens, we specialize in bringing your events to life through stunning photography, 
          dynamic videography, and professional event management. Whether it's a corporate event, 
          wedding, or creative content, our team ensures your moments are unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ServiceCard title="Events Management" icon="🎉" />
          <ServiceCard title="Photography" icon="📷" />
          <ServiceCard title="Videography" icon="🎥" />
          <ServiceCard title="Content Creation" icon="✏️" />
        </div>
        <div className="text-center">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us to make your next event truly memorable!
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function ServiceCard({ title, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}