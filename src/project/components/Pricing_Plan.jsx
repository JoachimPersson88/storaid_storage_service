import Price_List from "./Price_List";

export default function Pricing_Plan() {
  
  // Gemensam lista med features som alla kort kan använda
  const baseFeatures = [
    "Nam nec ipsum in dolor",
    "Fusce nec ligula ut arcu",
    "Aliquam pulvinar arcu in",
    "Duis gravida enim porta",
    "Etiam eget libero non ligula",
    
  ];
  // Data för alla plan: titel, pris, tidsenhet och vilka features som ska visas
  const plans = [
    { title: "Small Unit", price: 50, per: "/month", list: baseFeatures },
    { title: "Medium Unit", price: 100, per: "/month", list: baseFeatures },
    { title: "Large Unit", price: 150, per: "/month", list: baseFeatures },
    { title: "Executive Unit", price: 200, per: "/month", list: baseFeatures },
    
  ];

  return (
    <section className="pricing_plan">
      <div className="container">
        <h4 className="header">Pricing Plan</h4>
        <h3 className="headline">
          Find the Perfect Plan for
          <br />
          Your Storage Needs
        </h3>
        <div className="pricing_grid">
          {plans.map((p, i) => (
            // Sprider ut (spread) plan-objektets fält som props till Price_List
            // key=i behövs för Reacts list-rendering
            <Price_List key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
