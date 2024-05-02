import styles from "../Card/Card.module.css";
import { useState } from "react";

const Card = ({ title, photoUrl, price, location }) => {
  const [isShowLocation, setShowLocation] = useState(false);

  const displayTitle = () => {
    console.log(title)
  }

  return (
    <div onClick={displayTitle} className={styles.main}>
      <img src={photoUrl} alt="product photo" />
      <h4 className={styles.title}>{title}</h4>
      <h6 className={styles.price}>${price}</h6>
      <button
        onClick={() => setShowLocation(!isShowLocation)}
        className={styles.locationBtn}
      >
        {isShowLocation ? <>Hide Location</> : <>Show Location</>}
      </button>
      {isShowLocation && <p className={styles.location}>{location}</p>}
    </div>
  );
};

export default Card;
