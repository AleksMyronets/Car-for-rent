// import React, { useState } from 'react';

// import {
//   Img,
//   Container,
//   ContainerCar,
//   Icon,
//   BtnIcon,
//   LearnMoreButton,
//   PriceFilter,
// } from './Catalog.styled';

// const CatalogPage = ({ cars, onClick, onClickLoadMore, addFavorite }) => {
//   const [priceFilter, setPriceFilter] = useState({
//     minPrice: 0,
//     maxPrice: 100,
//   });

//   const handlePriceRangeChange = e => {
//     const { name, value } = e.target;
//     setPriceFilter({
//       ...priceFilter,
//       [name]: value,
//     });
//   };

//   const filteredCars = cars.filter(car => {
//     const rentalPrice = car.rentalPrice || 0;
//     return (
//       rentalPrice >= priceFilter.minPrice && rentalPrice <= priceFilter.maxPrice
//     );
//   });

//   return (
//     <>
//       <Container>
//         <PriceFilter>
//           <label>Price Range:</label>
//           <input
//             type="number"
//             name="minPrice"
//             value={priceFilter.minPrice}
//             onChange={handlePriceRangeChange}
//             step={10}
//           />
//           <span>-</span>
//           <input
//             type="number"
//             name="maxPrice"
//             value={priceFilter.maxPrice}
//             onChange={handlePriceRangeChange}
//             step={10}
//           />
//         </PriceFilter>
//         {filteredCars.map(car => (
//           <ContainerCar key={car.id}>
//             <Img src={car.img} alt="car" />
//             <BtnIcon onClick={() => addFavorite(car)}>
//               <Icon id={car.id} />
//             </BtnIcon>
//             <ul>
//               <li>{car.make}</li>
//               <li>{car.model}</li>
//               <li>{car.year}</li>
//               <li>{car.rentalPrice}</li>
//             </ul>
//             <ul>
//               <li>{car.address}</li>
//               <li>{car.rentalCompany}</li>
//               <li>{car.type}</li>
//               <li>{car.model}</li>
//               <li>{car.id}</li>
//               <li>{car.accessories[1]}</li>
//             </ul>
//             <LearnMoreButton>
//               <button onClick={() => onClick(car)}>Learn more</button>
//             </LearnMoreButton>
//           </ContainerCar>
//         ))}
//         {filteredCars.length >= 8 && (
//           <button onClick={onClickLoadMore}>Load more</button>
//         )}
//       </Container>
//     </>
//   );
// };

// export default CatalogPage;

import React from 'react';

import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
  LearnMoreButton,
} from './Catalog.styled';

const CatalogPage = ({ cars, onClick, onClickLoadeMore, addFavorit }) => {

  return (
    <>
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
            <LearnMoreButton>
              <button onClick={() => onClick(car)}>Learn more</button>
            </LearnMoreButton>
          </ContainerCar>
        ))}
        {cars.length >= 8 && (
          <button onClick={() => onClickLoadeMore()}>Load more</button>
        )}
      </Container>
    </>
  );
};

export default CatalogPage;