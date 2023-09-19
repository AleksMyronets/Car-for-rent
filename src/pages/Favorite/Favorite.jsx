import {
  Img,
  Container,
  ContainerCar,
  ContainerMain,
} from '../Catalog/Catalog.styled';

const Favorite = ({ favorite }) => {
  return (
    <>
      <ContainerMain>
        <Container>
          {favorite.map(car => (
            <ContainerCar key={car.id}>
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
      </ContainerMain>
    </>
  );
};

export default Favorite;
