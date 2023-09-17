import styled from '@emotion/styled';

const HomeContainer = styled.div`
  background-color: #333; /* Темний фон */
  height: 100vh; /* Висота на весь екран */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff; /* Колір тексту */
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
`;

const Button = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0058a3;
  }
`;

export { HomeContainer, Title, Description, Button };
