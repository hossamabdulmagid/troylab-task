import styled from 'styled-components';

import {FcContacts, FcSearch} from "react-icons/fc";
import {MdDeliveryDining} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";

export const RapperSidebarComponent = styled.div`
  background-color: #16A79B;
  color: silver;

  .sidenav-web {
    height: 89%;
    width: 300px;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(22, 167, 155);
    overflow-x: hidden;
    padding-top: 10px;
    position: fixed;
  }

  .sidenav-mob {
    height: 90%;
    width: 300px;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(22, 167, 155);
    overflow-x: hidden;
    padding-top: 10px;
    margin: 0 auto;

  }

  .input-search {
    margin-top: 2px;
  }

  h4 {
    font-weight: 400;
    padding-top: 5px;
    color: silver;
  }

  .delivery-section {
    margin-top: 170px;
    font-size: 22px;
  }

  .delivery-section-mob {
    margin-top: 170px;
    font-size: 22px;
    text-align: center;
  }

  .search-result {
    margin-top: 20px;
    margin-bottom: 100px;
  }

  .card-header {
    background-color: #206861;
  }

  .profile-pic {
    display: inline;

    img {
      float: right;
      width: 70px;
      height: 60px;
      border-radius: 30px;
    }
  }

  .card-body {
    margin-bottom: 10px;
    padding: 10px;
  }

  .card-body-head {
    background-color: #E5F5F4;
  }

  .box {
    padding: 2px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 8px;
  }

  .box-content {
    display: inline;
  }

  .product-img {
    float: right;
    height: 50px;
  }

  .d-block {
    float: right;
  }

  .price {
    display: inline-flex;
    float: left;
  }
`;

export const ContactIcon = styled(FcContacts)``;
export const SearchIcon = styled(FcSearch)``;
export const DeliverIcon = styled(MdDeliveryDining)``;
export const CloseIcon = styled(AiFillCloseCircle)`
  margin: 6px;
`;
export const CloseIconRed = styled(AiFillCloseCircle)`
  margin: 6px;
  color: #FF9797;
`;


