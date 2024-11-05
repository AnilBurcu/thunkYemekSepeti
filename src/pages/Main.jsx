import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../redux/actions/restaurantAction";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestaurantCard from "../components/RestaurantCard";

const Main = () => {
  //restoran verilerine abone ol

  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );
  // dispatch metodu kurulumu
  const dispatch = useDispatch();
  // verileri alan metod
  const getData = () => {
    dispatch(getRestaurants());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <h1 className="text-3xl">Tum Restoranlar</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={getData} />
        ) : (
          restaurants.map((item) => (
            <div key={item.id}>
              <RestaurantCard data={item} />
            </div>
          ))
        )}
      </div>
    </Container>
  );
};

export default Main;
