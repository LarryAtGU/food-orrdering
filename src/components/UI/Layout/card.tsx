import "./card.css";
const Card = (props: { children: any }) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
