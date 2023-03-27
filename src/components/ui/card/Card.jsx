import './card.css';

function Card({ children, center = '', full = '' }) {
  return <div className={`card ${center && 'center'} ${full && 'full'}`}>{children}</div>;
}
export default Card;
