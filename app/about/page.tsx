import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Who We Are</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            At Artsy Lens, we believe that every event has a story to tell. Our mission is to capture 
            those stories and craft memorable experiences through meticulous planning, creative visuals, 
            and engaging content.
          </p>
          <p className="text-lg mb-6">
            With a team of experienced photographers, videographers, and event planners, we bring 
            professionalism, creativity, and passion to every project.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}