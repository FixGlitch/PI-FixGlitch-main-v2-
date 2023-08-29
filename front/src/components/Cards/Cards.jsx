import Card from "../Card/Card";
import style from "./Cards.module.css";



export default function Cards({ characters, onClose }) {
  return (
    <div className={style.flexCards}>
      {characters.map(({ id, name, status, specie, gender, origin, image }) => {
        return (
          <div className={style.contenedorCard}>
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              specie={specie}
              geneder={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          </div>
        );
      })}
    </div>
  );
}
