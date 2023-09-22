import React, { useState, useEffect } from 'react';
import { fetchCars } from '../../components/api';
import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
  LearnMoreButton,
  BtnLoadMore,
  Form,
  ContainerMain,
} from './Catalog.styled';

const FavoriteButton = ({ car, addFavorit }) => {
  const [isIconBlue, setIsIconBlue] = useState(false);

  const toggleIconColor = () => {
    setIsIconBlue(!isIconBlue);
    addFavorit(car);
  };

  return (
    <BtnIcon onClick={toggleIconColor}>
      <Icon id={car.id} style={{ color: isIconBlue ? 'blue' : 'initial' }} />
    </BtnIcon>
  );
};

const CatalogPage = ({
  cars,
  onClick,
  onClickLoadMore,
  addFavorite,
  onLoadMore,
  setIconColor,
}) => {
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const [filteredCars, setFilteredCars] = useState([]);
  const [loadedCarsCount, setLoadedCarsCount] = useState(8);
  const [carsPerPage] = useState(8);

  const [isFetching, setIsFetching] = useState(false);

  const handleSearch = async () => {
    if (!isFetching) {
      setIsFetching(true);

      try {
        const params = {
          make: brandFilter,
          rentalPrice: priceFilter,
          fromMileage: fromMileage,
          toMileage: toMileage,
        };

        const carsData = await fetchCars(params); 

        setFilteredCars(carsData); 
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        setIsFetching(false);
      }, 2000);
    }
  };

  const handleLoadMore = () => {
    setLoadedCarsCount(loadedCarsCount + carsPerPage);
  };

  useEffect(() => {
    handleSearch();
  });

  return (
    <>
      <ContainerMain>
        <Form>
          <label>Car brand</label>
          <select
            value={brandFilter}
            onChange={e => setBrandFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Buick">Buick</option>
            <option value="Volvo">Volvo</option>
            {/* Додайте інші опції брендів */}
          </select>

          <label>Price/1 hour</label>
          <select
            value={priceFilter}
            onChange={e => setPriceFilter(e.target.value)}
          >
            <option value="">Any</option>
            {Array.from({ length: 16 }, (_, index) => (
              <option key={index} value={(index + 1) * 10}>
                ${(index + 1) * 10}
              </option>
            ))}
          </select>

          <label>Car mileage / km (From)</label>
          <input
            type="number"
            value={fromMileage}
            onChange={e => setFromMileage(e.target.value)}
          />

          <label>To</label>
          <input
            type="number"
            value={toMileage}
            onChange={e => setToMileage(e.target.value)}
          />

          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </Form>

        <Container>
          {filteredCars.slice(0, loadedCarsCount).map(car => (
            <ContainerCar key={car.id}>
              <Img src={car.img} alt="car" />
              <BtnIcon onClick={() => addFavorite(car)}>
                <Icon id={car.id} />
              </BtnIcon>
              <FavoriteButton car={car} addFavorit={addFavorite} />
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
                <li>{car.id}</li>
                <li>{car.accessories[1]}</li>
              </ul>
              <LearnMoreButton onClick={() => onClick(car)}>
                Learn more
              </LearnMoreButton>
            </ContainerCar>
          ))}
        </Container>
        {loadedCarsCount < filteredCars.length && (
          <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
        )}
      </ContainerMain>
    </>
  );
};

export default CatalogPage;
