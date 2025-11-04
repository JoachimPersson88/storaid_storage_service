import Price_List from "./Price_List";

export default function Pricing_Plan() {
  return (
    <section className="pricing_plan">
      <div className="container">
        <p className="body-text-2">
          Pricing Plan
        </p>
        <h2>
          Find the Perfect Plan for
          <br/>
          Your Storage Needs
        </h2>

        <div className="pricing_grid">
            <Price_List/>
        </div>
      </div>
    </section>
  );
}
