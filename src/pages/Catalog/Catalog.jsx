// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Img,
//   Container,
//   ContainerCar,
//   Icon,
//   BtnIcon,
//   LearnMoreButton,
//   BtnLodeMore,
//   Form,
//   ContainerMain,
// } from './Catalog.styled';


// const FavoriteButton = ({ car, addFavorit }) => {
//   const [isIconBlue, setIsIconBlue] = useState(false);

//   const toggleIconColor = () => {
//     setIsIconBlue(!isIconBlue);
//     addFavorit(car);
//   };

//   return (
//     <BtnIcon onClick={toggleIconColor}>
//       <Icon id={car.id} style={{ color: isIconBlue ? 'blue' : 'initial' }} />
//     </BtnIcon>
//   );
// };

// const CatalogPage = ({
//   cars,
//   onClick,
//   onClickLoadeMore,
//   addFavorit,
//   onLoadeMore,
//   setIconColor,
// }) => {
//   const [brandFilter, setBrandFilter] = useState('');
//   const [priceFilter, setPriceFilter] = useState('');
//   const [fromMileage, setFromMileage] = useState('');
//   const [toMileage, setToMileage] = useState('');

//   const [filteredCars, setFilteredCars] = useState([]);
//   const [loadedCarsCount, setLoadedCarsCount] = useState(6);
//   const [carsPerPage] = useState(6);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         'https://6492c7dd428c3d2035d0ab50.mockapi.io/adverts',
//         {
//           params: {
//             make: brandFilter,
//             rentalPrice: priceFilter,
//             fromMileage: fromMileage,
//             toMileage: toMileage,
//           },
//         }
//       );

//       if (response.data && typeof response.data === 'object') {
        
//         setFilteredCars(response.data);
//       } else {
        
//         console.error('Response is not valid JSON:', response.data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLoadMore = () => {
//     setLoadedCarsCount(loadedCarsCount + carsPerPage);
//   };

//   useEffect(() => {
//     handleSearch();
//   });
    
    

//   return (
//     <>
//       <ContainerMain>
//         <Form>
//           <label>Car brand</label>
//           <select
//             value={brandFilter}
//             onChange={e => setBrandFilter(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="Buick">Buick</option>
//             <option value="Volvo">Volvo</option>
//             <option value="HUMMER">HUMMER</option>
//             <option value="Subaru">Subaru</option>
//             <option value="Mitsubishi">Mitsubishi</option>
//             <option value="Nissan">Nissan</option>
//             <option value="Lincoln">Lincoln</option>
//             <option value="GMC">GMC</option>
//             <option value="Hyundai">Hyundai</option>
//             <option value="MINI">MINI</option>
//             <option value="Bentley">Bentley</option>
//             <option value="Mercedes-Benz">Mercedes-Benz</option>
//             <option value="Aston Martin">Aston Martin</option>
//             <option value="Pontiac">Pontiac</option>
//             <option value="Lamborghini">Lamborghini</option>
//             <option value="Audi">Audi</option>
//             <option value="BMW">BMW</option>
//             <option value="Chevrolet">Chevrolet</option>
//             <option value="Chrysler">Chrysler</option>
//             <option value="Kia">Kia</option>
//             <option value="Land">Land</option>
//           </select>
//           <label>Price/1 hour</label>
//           <select
//             value={priceFilter}
//             onChange={e => setPriceFilter(e.target.value)}
//           >
//             <option value="">Any</option>
//             {Array.from({ length: 16 }, (_, index) => (
//               <option key={index} value={(index + 1) * 10}>
//                 ${(index + 1) * 10}
//               </option>
//             ))}
//           </select>
//           <label>Car mileage / km (From)</label>
//           <input
//             type="number"
//             value={fromMileage}
//             onChange={e => setFromMileage(e.target.value)}
//           />
//           <label>To</label>
//           <input
//             type="number"
//             value={toMileage}
//             onChange={e => setToMileage(e.target.value)}
//           />
//           <button type="button" onClick={handleSearch}>
//             Search
//           </button>
//         </Form>

//         <Container>
//           {filteredCars.slice(0, loadedCarsCount).map(car => (
//             <ContainerCar key={car.id}>
//               <Img src={car.img} alt="car" />
//               <BtnIcon onClick={() => addFavorit(car)}>
//                 <Icon id={car.id} />
//               </BtnIcon>
//               <FavoriteButton car={car} addFavorit={addFavorit} />
//               <ul>
//                 <li>{car.make}</li>
//                 <li>{car.model}</li>
//                 <li>{car.year}</li>
//                 <li>{car.rentalPrice}</li>
//               </ul>
//               <ul>
//                 <li>{car.address}</li>
//                 <li>{car.rentalCompany}</li>
//                 <li>{car.type}</li>
//                 <li>{car.id}</li>
//                 <li>{car.accessories[1]}</li>
//               </ul>
//               <LearnMoreButton onClick={() => onClick(car)}>
//                 Learn more
//               </LearnMoreButton>
//             </ContainerCar>
//           ))}
//         </Container>
//         {loadedCarsCount < filteredCars.length && (
//           <BtnLodeMore onClick={handleLoadMore}>Load more</BtnLodeMore>
//         )}
//       </ContainerMain>
//     </>
//   );
// };

// export default CatalogPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
  LearnMoreButton,
  BtnLodeMore,
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
  onClickLoadeMore,
  addFavorit,
  onLoadeMore,
  setIconColor,
}) => {
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const [filteredCars, setFilteredCars] = useState([]);
  const [loadedCarsCount, setLoadedCarsCount] = useState(6);
  const [carsPerPage] = useState(6);

  const [isFetching, setIsFetching] = useState(false);

  const handleSearch = async () => {
    if (!isFetching) {
      setIsFetching(true);

      try {
        const response = await axios.get(
          'https://6492c7dd428c3d2035d0ab50.mockapi.io/adverts',
          {
            params: {
              make: brandFilter,
              rentalPrice: priceFilter,
              fromMileage: fromMileage,
              toMileage: toMileage,
            },
          }
        );

        if (response.data && typeof response.data === 'object') {
          setFilteredCars(response.data);
        } else {
          console.error('Response is not valid JSON:', response.data);
        }
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        setIsFetching(false);
      }, 1000); // Затримка в мілісекундах (в даному випадку 1000 мс = 1 секунда)
    }
  };

  const handleLoadMore = () => {
    setLoadedCarsCount(loadedCarsCount + carsPerPage);
  };

  useEffect(() => {
    handleSearch();
  }, [brandFilter, priceFilter, fromMileage, toMileage]);

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
            {/* Додайте інші опції для брендів */}
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
              <BtnIcon onClick={() => addFavorit(car)}>
                <Icon id={car.id} />
              </BtnIcon>
              <FavoriteButton car={car} addFavorit={addFavorit} />
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
          <BtnLodeMore onClick={handleLoadMore}>Load more</BtnLodeMore>
        )}
      </ContainerMain>
    </>
  );
};

export default CatalogPage;