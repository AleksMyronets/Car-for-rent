import { useEffect } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    const hendleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  const hendleBeckdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={hendleBeckdropClick}>
        <ModalContainer>
          <img src={data.img} alt="" />
          <ul>
            <li>{data.make}</li>
            <li>{data.model}</li>
            <li>{data.year}</li>
            <li>Price/1 hour: {data.rentalPrice}</li>
            <li>Fuel Consumption: {data.fuelConsumption}</li>
            <li>Engine Size: {data.engineSize}</li>
          </ul>
          <ul>
            <li>{data.address}</li>
            <li>{data.rentalCompany}</li>
            <li>Type: {data.type}</li>
            <li>Mileage: {data.mileage} km</li>
            <li>ID: {data.id}</li>
            <li>Accessories: {data.accessories.join(', ')}</li>
          </ul>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;

