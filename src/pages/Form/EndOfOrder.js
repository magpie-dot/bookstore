import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import style from "../../App.module.css";
import styles from "./Form.module.css"

const EndOfOrder = (props) => {
return(
    <>
    <div className={styles.info}>Twoje zamówienie zostało wysłane</div>
  <Button variant="secondary">
    <Link className={style.link} to="/">
      Przejdź do strony głównej
    </Link>
  </Button>
  </>
)};

export default EndOfOrder
