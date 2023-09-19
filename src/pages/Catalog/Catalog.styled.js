import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';

const ContainerMain = styled.ul`
  background: linear-gradient(to bottom, #0000ff 0%, #ffff00 100%);
  padding-top: 20px;
  padding-bottom: 50px;
`;

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
  padding: 20px; 
  border-radius: 8px; 
`;

const ContainerCar = styled.li`
  flex-basis: calc((100% - 29px) / 4);
  height: 100%;
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
  width: 100%;
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
  display: flex;
  justify-content: center; 
  align-items: center;
  margin: 20px 0;
`;

const BtnLearnMore = styled.button`
  border-radius: 12px;
  background: #3470ff;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;

const BtnLodeMore = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.5s;
  margin: 20px auto;
  display: block;
  &:hover {
    background-color: #0058a3;
  }

`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f7f7f7;

  label {
    margin-bottom: 5px;
  }

  select,
  input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  color: red;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Description = styled.button`
  background: none;
  border: none;
  height: 225px;
`;


export { Img, Container, ContainerCar, Icon, BtnIcon, LearnMoreButton, PriceFilter, BtnLearnMore, BtnLodeMore, Form, ContainerMain, RemoveButton, Description};