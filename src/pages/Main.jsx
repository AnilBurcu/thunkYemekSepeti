import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../redux/actions/restaurantAction";

import Loader from "../components/Loader";
import Error from "../components/Error";
import RestaurantCard from "../components/RestaurantCard";
import Container from "../components/Container";

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
      <h1 className="text-3xl">Tüm Restoranlar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={getData} />
        ) : (
          restaurants.length > 0 &&
          restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))
        )}
      </div>
    </Container>
  );
};

export default Main;
