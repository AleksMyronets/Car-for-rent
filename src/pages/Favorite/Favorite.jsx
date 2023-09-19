import React, { useState } from 'react';

import {
  Img,
  Container,
  ContainerCar,
  RemoveButton,
} from '../Catalog/Catalog.styled';

const Favorite = ({ favorite }) => {
  const [favoriteList, setFavoriteList] = useState(favorite);

  const handleRemoveFavorite = carId => {
    const updatedFavoriteList = favoriteList.filter(car => car.id !== carId);
    setFavoriteList(updatedFavoriteList);
  };

  return (
    <>
        <Container>
          {favoriteList.map(car => (
            <ContainerCar key={car.id}>
              <RemoveButton onClick={() => handleRemoveFavorite(car.id)}>
                ✖
              </RemoveButton>
              <Img src={car.img} alt="car" />
              <ul>
                <li>{car.make}</li>
                <li>{car.model}</li>
                <li>{car.year}</li>
                <li>{car.rentalPrice}</li>
              </ul>
              <ul>
                <li>{car.address}</li>
                <li>{car.rentalCompany}</li>
                <li>{car.type}</li>
                <li>{car.model}</li>
                <li>{car.id}</li>
                <li>{car.accessories[1]}</li>
              </ul>
            </ContainerCar>
          ))}
        </Container>
    </>
  );
};

export default Favorite;