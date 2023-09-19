import styled from '@emotion/styled';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 600px;
  width: 90%;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const CarInfo = styled.div`
  ul {
    list-style: none;
    padding: ;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    li {
      width: 50%; 
      margin-bottom: 10px;
    }
  }
`;

const BtnRental = styled.a``;

export {
    Overlay,
    ModalContainer,
    CarInfo, 
    BtnRental
};