import { useState } from "react";
import styles from "../CardsWrapper/CardsWrapper.module.css";
import Card from "../Card/Card";

const CardsWrapper = () => {
  const [products, setProducts] = useState([
    {
      title: "Lounge Tunic/black",
      photoUrl: "https://images.squarespace-cdn.com/content/v1/5d02d798cc25920001b61816/1562770837698-FMNKJ1A4GRW0EYTHCPDD/ulihu-charcoal-silk-linen-tunic_0326-v1-FINAL-copy.jpg?format=1500w",
      price: "50.00",
      location: "Vilnius Outlet",
    },
    {
      title: "Lounge Tunic/blue",
      photoUrl: "https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102915554-HKBHY3P2SYVIXVMQA7ZX/ulihu-blue-linen-tunic_0308-v1-FINAL-copy.jpg?format=2500w",
      price: "50.00",
      location: "Vilnius Outlet",
    },
    {
      title: "Lounge Tunic/Cream",
      photoUrl: "https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102915639-GQTUKV9FGP4FE86IZAKH/lauren-winter-natural-dress_0172-v1-FINAL-copy.jpg?format=1500w",
      price: "40.00",
      location: "Vilnius Panorama",
    },
    {
      title: "Sonia Skirt",
      photoUrl: "https://images.squarespace-cdn.com/content/v1/5d02d798cc25920001b61816/1560521851099-Y8NGHHO3QX5EVA0JBN9T/lauren-winter-sonia-skirt-grey_0270-v1-FINAL-copy.jpg?format=1500w",
      price: "50.00",
      location: "Vilnius Ozas",
    },
  ]);

  return (
    <div className={styles.main}>
      {products.map((product) => (
        <Card
          title={product.title}
          photoUrl={product.photoUrl}
          price={product.price}
          location={product.location}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
