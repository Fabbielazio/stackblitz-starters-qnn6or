import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Events Management</h2>
          <p className="mb-4">Planning an event can be overwhelming, but not with Artsy Lens by your side. We handle everything from logistics, décor, and scheduling to making sure everything runs smoothly. Whether it's a corporate gathering, a wedding, or a private party, we take care of the details so you can enjoy the day.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Photography</h2>
          <p className="mb-4">Capture your special moments with our professional photography services. We offer:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Event Photography</li>
            <li>Portrait Sessions</li>
            <li>Product and Commercial Shoots</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Videography</h2>
          <p className="mb-4">Create stunning visual stories with our videography services. From highlight reels of events to promotional content for your business, we craft videos that speak to your audience.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Content Creation</h2>
          <p className="mb-4">Need engaging content for your social media or website? We offer:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Content Strategy and Planning</li>
            <li>Graphic Design</li>
            <li>Social Media Management</li>
          </ul>
          <p>Let us help you grow your brand with content that resonates.</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}