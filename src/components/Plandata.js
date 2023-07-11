import "./PlanStyle.css";
import Plan from "./Plan.js";

function Plandata(props) {
  return (
    <div className="card">
      <h3 className="card-name">{props.Name}</h3>
      <div className="card-image">
        <img alt="im" src={props.cardimage} />
      </div>
      <div className="description">
        <p>{props.flight}</p>
        <p>{props.hotel}</p>
        <p>{props.transfers}</p>
        <p>{props.activites}</p>
      </div>
      <div className="amount">
        <h3>{props.amount}/-</h3>
      </div>
      <div className="Book-now">
        <button id="buy">Book Now</button>
      </div>
    </div>
  );
}

export default Plandata;
