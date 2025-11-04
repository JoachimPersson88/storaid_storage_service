export default function Price_List({
  title = "Small Unit",
  price = 50,
  per = "/month",
  list = [
    "Nam nec ipsum in dolor",
    "Fusce nec ligula ut arcu",
    "Aliquam pulvinar arcu in",
    "Duis gravida enim porta",
    "Etiam eget libero non ligula",
  ],
}) {
  return (
    <div className="price_card">
      <h5>{title}</h5>

      <div className="price-row">
        <div>
          <img src="/src/project/interface/ui/Dollar.svg" alt="" />
          </div>
        <h3>{price}</h3>
        <h6>{per}</h6>
      </div>
      
      <p className="body-text">
        Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.
      </p>

      {/* horisontell linje */}
      <hr className="rule"/>

<ul className="list">
  {list.map((text, i) => (
    <li key={i}>
      
      {/* använd SVG som mask */}
      <span className="check-icon"/>
      <p className="body-text">{text}</p>
    </li>
  ))}
</ul>

      <button className="btn-rent">Rent Now</button>
    </div>
  );
}
