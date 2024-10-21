import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Our Work Speaks for Itself</h1>
        <p className="text-lg text-center mb-8">
          Check out some of our best projects in event management, photography, and videography. 
          We're proud to showcase our clients' smiles, excitement, and unique moments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace these with actual images from your portfolio */}
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}