import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return <div>Card</div>;
};

export default Card;
