import "./ContactformStyle.css";

function Contactform() {
  return (
    <div className="form-container">
      <h2>Queries?? Drop a Message</h2>
      <form>
        <input placeholder="Name" />
        <input placeholder="Phone No." />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button className="send">Send Message</button>
      </form>
    </div>
  );
}

export default Contactform;
