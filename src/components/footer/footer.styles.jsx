import styled from "styled-components";

import {RiShoppingCartLine} from "react-icons/ri";
import {BsWallet2} from "react-icons/bs";
import {FiMoreHorizontal} from "react-icons/fi";
import {FaReceipt} from "react-icons/fa";
import {GoHome} from "react-icons/go";


export const RapperFooterComponent = styled.div`
  color: dimgray;

  .footer {
    height: 30px;
    position: absolute;
    width: 250px;
    text-align: center;
  }

  ul {
    display: flex;

  }

  li {
    list-style: none;
    justify-content: space-between;
    cursor: pointer;
  }

  .web {
    margin: 2px 105px 2px 105px;
    padding: 2px;
    cursor: pointer;

  }

  .mob {
    display: block;
    pading: 3px;
    margin: 5px;
    cursor: pointer;
  }


`;


export const HomeIcon = styled(GoHome)``;
export const WalletIcon = styled(BsWallet2)``;
export const HorizontalIcon = styled(FiMoreHorizontal)``;
export const ReceiptIcon = styled(FaReceipt)``;
export const ShopIcon = styled(RiShoppingCartLine)``;