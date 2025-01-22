// BlogPostDetails.tsx

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// Define the type for post
interface BlogPost {
  id: string;
  title: string;
  content: string;
}

const BlogPostDetails = ({ post }: { post: BlogPost }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p>{post.content}</p>
        <Link to={`/blog/${post.id}`} className="bg-primary text-white px-3 py-2 rounded hover:bg-primary-dark mt-4 block">Read Full Story</Link>
      </div>
    </div>
  );
};

BlogPostDetails.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPostDetails;
