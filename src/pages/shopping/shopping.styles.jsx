import styled from 'styled-components';
import {AiFillCloseCircle} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";


export const CloseIcon = styled(AiFillCloseCircle)`
  margin: 6px;
  color: dimgray;
`;


export const SearchIcon = styled(BsSearch)``;


export const RapperShoppingComponent = styled.div`
  text-align: -webkit-center;
  margin-top: 20px;

  .kcal {
    float: left;
  }

  .card {

    text-align: center;
    margin: 0 auto;
    text-align: center;
    padding: 5px;

    .img {
      width: 120px;
      height: 90px;
      margin: 25px;
      display: block;
      padding:5px;
    }
  }


`;