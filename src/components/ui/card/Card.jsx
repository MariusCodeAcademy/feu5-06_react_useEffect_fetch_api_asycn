import './card.css';

function Card({ children, center = '' }) {
  return <div className={`card ${center && 'center'}`}>{children}</div>;
}
export default Card;
