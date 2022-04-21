import styled from 'styled-components';

import {FcContacts, FcSearch} from "react-icons/fc";
import {MdDeliveryDining} from "react-icons/md";


export const RapperSidebarComponent = styled.div`
  background-color: #16A79B;
  color: silver;

  .sidenav-web {
    height: 90%;
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


`;

export const ContactIcon = styled(FcContacts)``;
export const SearchIcon = styled(FcSearch)``;
export const DeliverIcon = styled(MdDeliveryDining)``;