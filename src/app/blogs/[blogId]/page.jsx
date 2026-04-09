const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Fardin Khan",
    category: "Programming",
    date: "2026-04-01",
    reading_time: "5 min",
    image: "https://i.ibb.co.com/3W5XzYp/react-blog.jpg",
    content:
      "React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable components and manage state efficiently...",
  },
  {
    id: 2,
    title: "Mastering Java Spring Boot",
    author: "Rahim Uddin",
    category: "Backend Development",
    date: "2026-03-28",
    reading_time: "7 min",
    image: "https://i.ibb.co.com/0Jmshvb/spring-boot.jpg",
    content:
      "Spring Boot simplifies Java backend development by providing pre-configured setups. It helps developers build production-ready applications quickly...",
  },
  {
    id: 3,
    title: "Understanding Databases (MySQL Basics)",
    author: "Karim Ahmed",
    category: "Database",
    date: "2026-03-20",
    reading_time: "6 min",
    image: "https://i.ibb.co.com/j6Y6w7G/mysql.jpg",
    content:
      "Databases are essential for storing application data. MySQL is one of the most popular relational databases used worldwide...",
  },
  {
    id: 4,
    title: "UI Design Tips for Beginners",
    author: "Nusrat Jahan",
    category: "Design",
    date: "2026-03-15",
    reading_time: "4 min",
    image: "https://i.ibb.co.com/fX8z9Jr/ui-design.jpg",
    content:
      "Good UI design improves user experience. Focus on simplicity, consistency, and proper color usage to make your design more attractive...",
  },
];

const BlogsDetailsPage = async ({params}) => {
    const {blogId} = await params;
    const blog = blogs.find(blog => blog.id === parseInt(blogId))
  return (
  <div>

        <h1>Blog Details are Coming</h1>
        {blog && <div>
            <h2>Blog Title: {blog.title}</h2>
            <p>Blog Content: {blog.content}</p>
            </div>
            }
  </div>
  );
};

export default BlogsDetailsPage;
