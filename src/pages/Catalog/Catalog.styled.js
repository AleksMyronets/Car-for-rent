import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';

const Img = styled.img`
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  background-color: #f0f0f0; 
  padding: 20px; 
  border-radius: 8px; 
`;

const ContainerCar = styled.li`
  flex-basis: calc((100% - 29px) / 4);
  position: relative;
  margin-bottom: 50px;
  background-color: #ffffff; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  padding: 20px; 
  margin-right: 15px;
  margin-left: 15px;
`;

const Icon = styled(AiOutlineHeart)`
  fill: #ff5733; 
  width: 18px;
  height: 18px;
`;

const BtnIcon = styled.button`
  position: absolute;
  left: 270px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ffffff; 
  border-radius: 50%; 
  width: 32px;
  height: 32px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const LearnMoreButton = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #0058a3;
  }
`;

const PriceFilter = styled.button`

`;

export { Img, Container, ContainerCar, Icon, BtnIcon, LearnMoreButton, PriceFilter };