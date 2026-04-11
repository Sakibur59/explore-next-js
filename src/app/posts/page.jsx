import Link from "next/link";


const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const Posts = await res.json();
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Post: {Posts.length}</h2>

      <div className="grid grid-cols-3 gap-6 ">
        {Posts.map((post) => (
        <div key={post.id} className="border  rounded-2xl p-6">
          <h3 className="text-4xl font-bold">Title: {post.title}</h3>
          <Link href={`/posts/${post.id}`}>Show Details</Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PostsPage;
