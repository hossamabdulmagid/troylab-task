import styled from 'styled-components';

import {FcContacts, FcSearch} from "react-icons/fc";
import {MdDeliveryDining} from "react-icons/md";


export const RapperSidebarComponent = styled.div`
  background-color: #16A79B;
  color: antiquewhite;

  .sidenav {
    height: 100%;
    width: 300px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(22, 167, 155);
    overflow-x: hidden;
    padding-top: 20px;
  }

.input-search{
  margin-top: 2px;
}  
  h4{
    font-weight: 400;
    padding-top: 5px;
    color:bisque;
  }
  
  .delivery-section {
    margin-top: 190px;
    font-size: 22px;
  }
  
`;

export const ContactIcon = styled(FcContacts)``;
export const SearchIcon = styled(FcSearch)``;
export const DeliverIcon = styled(MdDeliveryDining)``;