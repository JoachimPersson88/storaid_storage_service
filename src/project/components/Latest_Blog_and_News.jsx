import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blogs";
import Card from "./Card";

export default function Latest_Blog_and_News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogs()
      .then(data => {
        const firstThree = Array.isArray(data)
          ? data.slice(0, 3)
          : [];

        setPosts(
          firstThree.map(blog => ({
            ...blog,
            created: (blog.created).split("T")[0],

          }))
        );
      })
      .catch(() => setPosts([]))
  }, []);


  return (
    <section className="latest_blog_and_news">
      <div className="container">
        <h4 className="header">Latest Blog and News</h4>

        <div className="header_area">
          <h3>Check Out Our Latest Blog and News Update</h3>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida.
            Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>

        <div className="card_grid">
          {posts.map(card => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </section>
  );
}
