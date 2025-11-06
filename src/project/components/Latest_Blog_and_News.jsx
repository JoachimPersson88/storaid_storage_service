import Card from "./Card";

export default function Latest_Blog_and_News() {
  // Dummyinnehåll för tre kort – byt mot data/API senare om du vill
  const posts = [
    {
      date: "August 17, 2025",
      title:
        "Safe and Secure: The Importance of Choosing the Right Storage",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem...",
      href: "#",
    },
    {
      date: "July 12, 2025",
      title: "Storage Trends 2024: What’s New in the World of Storage",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem...",
      href: "#",
    },
    {
      date: "April 8, 2025",
      title:
        "Free Up Your Space, Free Up Your Life: The Power of Decluttering",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem...",
      href: "#",
    },
  ];

  return (
    <section className="latest_blog_and_news">
      <div className="container">
        <h4 className="header">Latest Blog and News</h4>

        <div className="header_area">
          <h3>Check Out Our Latest Blog and News Update</h3>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>

        <div className="card_grid">
          {posts.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
