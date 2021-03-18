import '../card-list/card-list.styles.css';
import Card from '../card/Card';

const CardList = ({ monsters }) => {
  // console.log(props);
  return (
    <div className="card-list">
      {monsters.slice(0, 8).map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
