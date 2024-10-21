import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Insights & Inspiration</h1>
        <p className="text-lg text-center mb-8">
          Looking for tips on how to plan the perfect event? Want to know what makes a great promotional video? 
          Our blog covers everything from event planning and photography tips to creative ideas for content marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPost title="10 Tips for Planning Your Dream Wedding" />
          <BlogPost title="The Art of Corporate Event Photography" />
          <BlogPost title="How to Create Engaging Social Media Content" />
          <BlogPost title="Video Marketing: Telling Your Brand's Story" />
          <BlogPost title="Event Decor Trends for 2023" />
          <BlogPost title="Mastering Portrait Photography: A Beginner's Guide" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

function BlogPost({ title }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" className="text-blue-600 hover:underline">Read more</a>
    </div>
  );
}