import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blogs";
import Card from "./Card";

export default function Latest_Blog_and_News() {
  // posts = lista med bloggar, setPosts = uppdatera listan
  const [posts, setPosts] = useState([]);

  // Hämtar bloggar och lägger dem i state (ex. topp 3)
useEffect(() => {
  fetchBlogs() // Anropa API-funktionen som hämtar bloggar (returnerar ett Promise)
    .then(data => { // När hämtningen lyckas får vi 'data' (förväntas vara en array)
      const firstThree = Array.isArray(data) // Säkerställ att vi verkligen fick en array
        ? data.slice(0, 3) // Ta de tre första inläggen
        : []; // Annars: fall tillbaka till tom lista

      setPosts( // Uppdatera state med bearbetad lista
        firstThree.map(blog => ({ // Gå igenom varje blog-objekt och skapa ett nytt objekt
          ...blog, // Kopiera alla befintliga fält med spread-operatorn
          created: (blog.created) // (Här kan du formattera datum om du vill; nu behålls originalet)
        }))
      );
    })
    .catch(() => setPosts([])) // Vid fel: nollställ listan så UI:et inte kraschar
}, []); // Tom array => effekten körs endast vid mount


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
