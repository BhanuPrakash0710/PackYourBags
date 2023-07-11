import "./PlanStyle.css";
import Plandata from "./Plandata";

function Plan() {
  return (
    <div className="all-planes">
      <h1>What We Offer!</h1>
      <div className="plan-card">
        <Plandata
          Name="All-Inclusive 4N stay"
          cardimage="https://www.transindus.co.uk/media/19526/carevella_exterior_deck.jpg?width=800&height=470.56330566837363"
          flight="2 Flights"
          hotel="1 Hotel"
          activites="4 Activites"
          transfers="2 Transfers"
          amount="Rs.25000"
        />
        <Plandata
          Name="Premium 4N stay"
          cardimage="https://media-cdn.tripadvisor.com/media/photo-s/16/73/9f/f3/majestic-beach-comforts.jpg"
          flight="2 Flights"
          hotel="1 Hotel"
          activites="2 Activities"
          transfers="0 Transfers"
          amount="Rs.20000"
        />
        <Plandata
          Name="Budget 4N stay"
          cardimage="https://seoimgak.mmtcdn.com/blog/sites/default/files/images/ACCOVAH.jpg"
          flight="0 Flights"
          hotel="1 Hotel"
          activites="1 Activity"
          transfers="0 Transfers"
          amount="Rs.11000"
        />
      </div>
    </div>
  );
}

export default Plan;
