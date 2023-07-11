import "./Mainstyle.css";

function Main(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="MainCompImg" src={props.img} />
      </div>
      <div className="main-content">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnclass}>
          {props.btntxt}
        </a>
      </div>
    </>
  );
}

export default Main;
