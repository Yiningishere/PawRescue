// '@/pages/SuccessStoryDetails.tsx'
import { useLoaderData } from 'react-router-dom';

type SuccessStory = {
  id: string;
  title: string;
  content: string;
  // Add other properties as necessary
};

const SuccessStoryDetails = () => {
  const story = useLoaderData() as SuccessStory; // Use the loader data and cast it to SuccessStory type

  if (!story) {
    return <div>Loading...</div>; // Handle the loading state
  }

  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
      {/* Render other story details as necessary */}
    </div>
  );
};

export default SuccessStoryDetails;
