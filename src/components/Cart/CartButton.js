import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
