import "nes.css/css/nes.min.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContext } from "../../Contexts/CardContext";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "450px",
    height: "70vh",
    backgroundColor: "#fff",
    borderRadius: "50px",
    marginLeft: "8vh",
    marginTop: "15vh",
    border: "4mm ridge rgba(250, 216, 89, 1)",
    backgroundColor: "white",
    marginRight: "5vh",
  },
  containerTitle: {
    textAlign: "center",
    margin: "10px 0px",
  },
  itemContainer: {
    display: "flex",
  },
  imageItem: {
    flexGrow: 1,
  },
  infoContainer: {
    flexGrow: 7,
  },
  img: {
    width: "135px",
  },
  containerTotal: {
    textAlign: "center",
    margin: "10px 0px",
  },
}));

export default function InfoCard() {
  const classes = useStyles();
  const { cardState } = React.useContext(CardContext);
  const [body, setBody] = React.useState(null);
  const [refreshTable, setRefreshTable] = React.useState(true);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (refreshTable) {
      let totalCard = 0;
      //map le contenu du panier
      let content = cardState.selectedCard.map((item, index) => (
        <div className={classes.itemContainer} key={index}>
          <div className={classes.imageItem}>
            <img
              className={classes.img}
              src={process.env.PUBLIC_URL + item.image}
            ></img>
          </div>
          <div className={classes.infoContainer}>
            <h3>{item.name}</h3>
            <p>Quantité : {item.quantity}</p>
            <p>Prix à l'unité : {item.price * item.tva + item.price} €</p>
            <p>
              Prix à total :{" "}
              {(item.price * item.tva + item.price) * item.quantity} €
            </p>
          </div>
        </div>
      ));
      //map le total
      cardState.selectedCard.map(
        (item, index) =>
          (totalCard =
            totalCard +
            (total + (item.price * item.tva + item.price) * item.quantity))
      );
      setTotal(totalCard.toFixed(2));
      setBody(content);
      setRefreshTable(false);
    }
  }, [cardState, refreshTable, body]);

  return (
    <div className={classes.card}>
      <div className={classes.containerTitle}>
        <h1>MY CARD</h1>
      </div>
      {body}
      <div className={classes.containerTotal}>
        <h2>Total : {total}</h2>
      </div>
    </div>
  );
}
