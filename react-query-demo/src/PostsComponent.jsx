import { useQuery } from "react-query";

// required named function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // required URL
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  // destructure exactly the required fields
  const { data, error, isLoading, isError } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

