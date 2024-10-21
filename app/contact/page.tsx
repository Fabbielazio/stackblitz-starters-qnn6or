import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Get In Touch</h1>
        <p className="text-lg text-center mb-8">We'd love to hear from you!</p>
        <div className="max-w-2xl mx-auto">
          <p className="mb-4">For inquiries, quotes, or collaborations, reach out via:</p>
          <ul className="list-disc list-inside mb-8">
            <li>Phone: [Your Contact Number]</li>
            <li>Email: [Your Email Address]</li>
            <li>Social Media: [Links to Instagram, Facebook, etc.]</li>
          </ul>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}