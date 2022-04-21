import styled from 'styled-components'
import {AiFillPlusCircle, AiOutlineExclamationCircle} from "react-icons/ai";


import {GiRun} from "react-icons/gi";

export const RapperHomePage = styled.div`
  .header {
    background-color: rgb(233, 235, 239);
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
    margin: 0 auto;
  }

  span{
    padding:2px;
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
    padding:5px;
    .img{
      width:150px;
      height: 150px;
      margin:10px; 
    }
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
