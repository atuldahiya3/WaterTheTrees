import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-200 to-green-50 text-black py-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">LetTreeTalk</h1>
          <p className="text-lg md:text-2xl mb-6">
            Join the movement changing the world, one habit at a time.
          </p>
          <p className="text-md md:text-lg max-w-2xl mx-auto">
            Track your eco-impact, celebrate wins, and connect with a global community of eco-champions.
          </p>
          <Link
            to=""
            className="mt-6 inline-block bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-green-100 transition"
          >
            Invest in the Future
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            LetTreeTalk empowers individuals to adopt sustainable habits through <strong>Post-Plant-Produce</strong>. 
            Post your tree-related activities, plant well-being in society, and produce rewards for yourself and the planet.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
            How LetTreeTalk Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Post</h3>
              <p className="text-gray-600">
                Share daily activities like watering, planting, or traditional knowledge about trees. Add photos, videos, or stories with location tags.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Plant</h3>
              <p className="text-gray-600">
                Planting goes beyond trees—it’s about fostering well-being and sustainability in communities worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Produce</h3>
              <p className="text-gray-600">
                Earn "leaves" (tokens) for your posts and activities. Redeem them for rewards while contributing to a greener planet.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              <strong>Earn Leaves:</strong> 1 leaf for watering, 2 for planting, 5 for knowledge posts. Reach milestones (e.g., 10,000 leaves) for exclusive rewards!
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Streaks:</strong> Build daily posting streaks (e.g., 50 days = 10 extra leaves, 100 days = 20 leaves).
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
            Driving Sustainability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Overcoming Psychological Barriers</h3>
              <p className="text-gray-600">
                Sustainable behaviors often fail due to delayed rewards. LetTreeTalk counters this with instant feedback through leaves, badges, and community engagement, tapping into <strong>Self-Determination Theory</strong> (autonomy, relatedness, competence).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">From Extrinsic to Intrinsic Motivation</h3>
              <p className="text-gray-600">
                Start with extrinsic rewards (points, leaderboards, discounts) to spark action. Over time, users internalize motivation, finding purpose and identity as eco-champions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Long-Term Impact</h3>
              <p className="text-gray-600">
                Normalize green behavior, foster an eco-champion identity, create spillover effects, achieve community goals, and bridge virtual actions to real-world impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Community & Knowledge Sharing</h3>
              <p className="text-gray-600">
                Connect with eco-champions globally, share traditional knowledge (e.g., seasonal effects, folksongs, proverbs), and build a supportive community for sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Pitch Section */}
      <section className="py-16 bg-green-100 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Invest in LetTreeTalk?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            LetTreeTalk is more than an app—it’s a movement to make sustainability accessible, rewarding, and community-driven. With a scalable model, proven psychological frameworks, and a growing user base, we’re poised to lead the eco-revolution.
          </p>
          <ul className="text-left max-w-xl mx-auto mb-8">
            <li className="mb-2">🌱 <strong>Scalable Impact:</strong> Engage millions in sustainable habits globally.</li>
            <li className="mb-2">🌍 <strong>Brand Partnerships:</strong> Collaborate with eco-focused brands for sponsorships.</li>
            <li className="mb-2">📈 <strong>Data-Driven Growth:</strong> Leverage user insights for targeted sustainability campaigns.</li>
            <li className="mb-2">🌿 <strong>Proven Model:</strong> Backed by Self-Determination Theory for lasting behavior change.</li>
          </ul>
          <Link
            to=""
            className="inline-block bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-green-100 transition"
          >
            Partner with Us
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default Home;