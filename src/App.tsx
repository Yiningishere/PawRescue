// '@/App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Dogs from '@/pages/Dogs';
import DogDetails from '@/pages/DogDetails';
import Report from '@/pages/Report';
import Sightings from '@/pages/Sightings';
import SightingDetails from '@/pages/SightingDetails';
import Volunteer from '@/pages/Volunteer';
import Donate from '@/pages/Donate';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import BlogPostDetails from '@/pages/BlogPostDetails'; // New import
import FAQ from '@/pages/FAQ';
import SuccessStories from '@/pages/SuccessStories';
import SuccessStoryDetails from '@/pages/SuccessStoryDetails'; // New import
import AdoptionGuidelines from '@/pages/AdoptionGuidelines';
import Partners from '@/pages/Partners';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Contact from '@/pages/Contact';
import AdoptDog from '@/pages/AdoptDog';
import StartApplication from '@/pages/StartApplication'; // New import
import { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    // Fetch posts data from an API
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));

    // Fetch stories data from an API
    fetch('/api/stories')
      .then(response => response.json())
      .then(data => setStories(data))
      .catch(error => console.error('Error fetching stories:', error));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/report" element={<Report />} />
            <Route path="/sightings" element={<Sightings />} />
            <Route path="/sightings/:id" element={<SightingDetails />} />
            <Route path="/dogs/:id" element={<DogDetails />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog posts={posts} />} />
            <Route
              path="/blog/:id"
              loader={async ({ params }: any) => {
                const response = await fetch(`/api/posts/${params.id}`);
                if (!response.ok) {
                  throw new Error(`Failed to fetch post with id ${params.id}`);
                }
                return response.json();
              }}
              element={<BlogPostDetails post={undefined} />}
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/success-stories" element={<SuccessStories stories={stories} />} />
            <Route
              path="/success-stories/:id"
              loader={async ({ params }: any) => {
                const response = await fetch(`/api/stories/${params.id}`);
                if (!response.ok) {
                  throw new Error(`Failed to fetch story with id ${params.id}`);
                }
                return response.json();
              }}
              element={<SuccessStoryDetails />}
            />
            <Route path="/guidelines" element={<AdoptionGuidelines />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adopt/:id" element={<AdoptDog />} />
            <Route path="/start-application" element={<StartApplication />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
