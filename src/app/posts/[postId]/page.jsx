const PostDetailsPage = async ({ params }) => {
  const { postId } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const Posts = await res.json();
  const {title,body} = Posts;

  return (
    <div>
      <h2>Show Details of Post: {postId}</h2>
      <h1>Post Title: {title}</h1>
      <p>Post Body: {body}</p>
    </div>
  );
};

export default PostDetailsPage;
