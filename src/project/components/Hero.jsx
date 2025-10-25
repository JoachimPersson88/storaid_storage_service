export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__area">

          <h4 className="hero__header">Welcome to StorAid</h4>
          <h1>Space Simplified,
            <br />
            Storage Perfected
          </h1>
          <p className="body-text-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna.
            Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis,
            libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.
          </p>
          <button className="btn-discover body-text-2">Discover More</button>

          <img src="/src/project/interface/assets/Image_man.svg" alt="" />
        </div>
      </div>
    </section>
  );
}