import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post #{id}</h1>
      <p>This is the content for post ID {id}.</p>
    </div>
  );
}

export default BlogPost;
