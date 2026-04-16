const PostDetailsPage = async ({ params }) => {
  const { postId } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const Posts = await res.json();
  const {title,body} = Posts;

  return (
    <div className="max-w-300 mx-auto text-center mt-30">
      <h2 className="text-3xl text-green-600 font-bold">Show Details of Post: {postId}</h2>
      <h1>Post Title: {title}</h1>
      <p>Post Body: {body}</p>
    </div>
  );
};

export default PostDetailsPage;
