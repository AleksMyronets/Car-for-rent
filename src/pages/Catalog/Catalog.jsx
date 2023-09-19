import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Для HTTP-запитів
import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
  LearnMoreButton,
  BtnLodeMore,
} from './Catalog.styled';

const CatalogPage = ({
  cars,
  onClick,
  onClickLoadeMore,
  addFavorit,
  onLoadeMore,
}) => {
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        'https://6492c7dd428c3d2035d0ab50.mockapi.io/adverts',
        {
          params: {
            brand: brandFilter,
            price: priceFilter,
            fromMileage: fromMileage,
            toMileage: toMileage,
          },
        }
      );

      setFilteredCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSearch(); 
  }, []); 

  return (
    <>
      <form>
        <label>Car brand</label>
        <select
          value={brandFilter}
          onChange={e => setBrandFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Buick">Buick</option>
          <option value="Volvo">Volvo</option>
          <option value="HUMMER">HUMMER</option>
          <option value="Subaru">Subaru</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Nissan">Nissan</option>
          <option value="Lincoln">Lincoln</option>
          <option value="GMC">GMC</option>
          <option value="Hyundai">Hyundai</option>
          <option value="MINI">MINI</option>
          <option value="Bentley">Bentley</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Pontiac">Pontiac</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Chrysler">Chrysler</option>
          <option value="Kia">Kia</option>
          <option value="Land">Land</option>
        </select>
        <label>Price/1 hour</label>
        <input
          type="number"
          value={priceFilter}
          onChange={e => setPriceFilter(e.target.value)}
          step={10}
        />
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
      </form>

      <Container>
        {filteredCars.map(car => (
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

