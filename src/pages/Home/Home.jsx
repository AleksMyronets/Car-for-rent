import React from 'react';
import {
  HomeContainer,
  Description,
  Button,
  Title
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Title>Ласкаво просимо до нашої компанії з оренди автомобілів</Title>
      <Description>
        Ми пропонуємо широкий вибір автомобілів для оренди в Україні. Дізнайтеся
        більше про наші послуги та автомобільний парк.
      </Description>
      <Button>Замовити консультацію</Button>
    </HomeContainer>
  );
};

export default Home;