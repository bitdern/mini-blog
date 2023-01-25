import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "blog one",
      body: "this is where text will go",
      topic: "Beef Initiative",
      id: 1,
    },
    {
      title: "blog two",
      body: "this is where text will go",
      topic: "Beef Initiative",
      id: 2,
    },
    {
      title: "blog three",
      body: "this is where text will go",
      topic: "Bitcoin",
      id: 3,
    },
  ]);

  const [name, setName] = useState("dern daddu");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.topic === "Bitcoin")}
        title="Bitcoin Blogs"
      />
      <button onClick={() => setName("dernpapi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
