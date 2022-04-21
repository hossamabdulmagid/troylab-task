import styled from 'styled-components'
import {AiFillPlusCircle, AiOutlineExclamationCircle} from "react-icons/ai";

import {GiRun, GiSandwich} from "react-icons/gi";
import {Button} from 'react-bootstrap';
import {FaHamburger, FaPizzaSlice, FaWineGlass} from "react-icons/fa";


export const SandwichIcon = styled(GiSandwich)`
  color: orangered;
`;

export const DrinkIcon = styled(FaWineGlass)`
  color: limegreen;
`;
export const PizzaIcon = styled(FaPizzaSlice)`
  color: orange;
`;
export const BurgerIcon = styled(FaHamburger)`
  color: orange;
`;


export const BUTTON = styled(Button)`
  margin: 5px;
`;
export const RapperHomePage = styled.div`
  .filter-section {
    margin: 20px;
    text-align: center;
  }


  span {
    padding: 2px;
  }

  .btn-light {
    border-radius: 10px;
  }

  .kcal {
    float: left;
    color: #16A79B;
    padding: 2px;
  }

  .text {
    color: #16A79B;
    padding: 2px;
  }

  .card-img {
    margin: 0 auto;
    text-align: center;
    padding: 5px;

    .img {
      width: 120px;
      height: 90px;
      margin: 10px;
    }
  }

  .card {
    margin: 5px;
    padding: 5px;
    borderRadius: 10px;
    text-align: center;
  }

`;


export const ExclamationIcon = styled(AiOutlineExclamationCircle)`
  float: right;
  color: #16A79B;
  margin: 1px;
`;


export const RunIcon = styled(GiRun)`

`;


export const PlusIcon = styled(AiFillPlusCircle)`
  color: #16A79B;
  float: right;
  margin-top: 16px;



`;
