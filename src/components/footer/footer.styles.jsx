import styled from "styled-components";

import {RiShoppingCartLine} from "react-icons/ri";
import {BsWallet2} from "react-icons/bs";
import {FiMoreHorizontal} from "react-icons/fi";
import {FaReceipt} from "react-icons/fa";
import {GoHome} from "react-icons/go";


export const RapperFooterComponent = styled.div`

  color: dimgray;

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    text-align: center;
    padding: 5px;
    margin-top:120px;
  }

  ul {
    display: flex;

  }

  li {
    list-style: none;
    cursor: pointer;
    padding: 5px;
  }

  .web {
    margin: 2px 150px 2px 150px;
    padding: 2px;
    cursor: pointer;
  }

  .mob {
    display: block;
    pading: 13px;
    cursor: pointer;
  }

`;


export const HomeIcon = styled(GoHome)``;
export const WalletIcon = styled(BsWallet2)``;
export const HorizontalIcon = styled(FiMoreHorizontal)``;
export const ReceiptIcon = styled(FaReceipt)``;
export const ShopIcon = styled(RiShoppingCartLine)``;