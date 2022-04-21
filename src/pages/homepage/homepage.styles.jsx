import styled from 'styled-components'
import {AiFillPlusCircle, AiOutlineExclamationCircle} from "react-icons/ai";


import {GiRun} from "react-icons/gi";

export const RapperHomePage = styled.div`
  span{
    padding:2px;
  }
  .btn-light {
    border-radius: 15px;
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
      width:100px;
      height: 100px;
    }
  }


`;


export const ExclamationIcon = styled(AiOutlineExclamationCircle)`
  float: right;
  color: #16A79B;
  margin: 8px;
`;


export const RunIcon = styled(GiRun)`

`;


export const PlusIcon = styled(AiFillPlusCircle)`
  color: #16A79B;
  float: right;
  margin-top: 16px;



`;
