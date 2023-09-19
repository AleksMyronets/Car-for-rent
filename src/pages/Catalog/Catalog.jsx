import React, {useState} from 'react';

import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
  LearnMoreButton,
  PriceFilter,
  BtnLodeMore, 
} from './Catalog.styled';

const CatalogPage = ({ cars, onClick, onClickLoadeMore, addFavorit, onLoadeMore }) => {
const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: 100,
  });

  const handlePriceRangeChange = e => {
    const { name, value } = e.target;
    setPriceFilter({
      ...priceFilter,
      [name]: value,
    });
  };


  return (
    <>
      <PriceFilter>
        <label>Price Range:</label>
        <input
          type="number"
          name="minPrice"
          value={priceFilter.minPrice}
          onChange={handlePriceRangeChange}
          step={10}
        />
        <span>-</span>
        <input
          type="number"
          name="maxPrice"
          value={priceFilter.maxPrice}
          onChange={handlePriceRangeChange}
          step={10}
        />
      </PriceFilter>
      <Container>
        {cars.map(car => (
          <ContainerCar key={car.id}>
            <Img src={car.img} alt="car" />
            <BtnIcon onClick={() => addFavorit(car)}>
              <Icon id={car.id} />
            </BtnIcon>
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
            <LearnMoreButton onClick={() => onClick(car)}>
              Learn more
            </LearnMoreButton>
          </ContainerCar>
        ))}
      </Container>
      {cars.length >= 8 && cars.length < 25 && (
        <BtnLodeMore onClick={onLoadeMore}>Load more</BtnLodeMore>
      )}
    </>
  );
};

export default CatalogPage;