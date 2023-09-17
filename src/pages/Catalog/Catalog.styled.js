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
  background-color: #f0f0f0; /* Додайте колір фону */
  padding: 20px; /* Додайте відступи для контейнера */
  border-radius: 8px; /* Додайте закруглення країв */
`;

const ContainerCar = styled.li`
  flex-basis: calc((100% - 29px) / 4);
  position: relative;
  margin-bottom: 50px;
  background-color: #ffffff; /* Додайте колір фону для кожного авто */
  border-radius: 8px; /* Додайте закруглення країв для кожного авто */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Додайте тінь для кращого вигляду */
  padding: 20px; /* Додайте відступи всередині кожного авто */
  margin-right: 15px;
  margin-left: 15px;
`;

const Icon = styled(AiOutlineHeart)`
  fill: #ff5733; /* Змініть колір іконки */
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
  background-color: #ffffff; /* Додайте колір фону кнопки */
  border-radius: 50%; /* Змініть форму кнопки на коло */
  width: 32px; /* Змініть розмір кнопки */
  height: 32px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Додайте тінь для кращого вигляду */
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