import styled from "styled-components";

import {RiHome2Line, RiShoppingCartLine} from "react-icons/ri";
import {BsWallet2} from "react-icons/bs";
import {FiMoreHorizontal} from "react-icons/fi";
import {FaReceipt} from "react-icons/fa";


export const RapperFooterComponent = styled.div`
  .footer {
    height: 75px;
    position: absolute;
    width: 250px;
    text-align: center;
  }


`;


export const HomeIcon = styled(RiHome2Line)``;
export const WalletIcon = styled(BsWallet2)``;
export const HorizontalIcon = styled(FiMoreHorizontal)``;
export const ReceiptIcon = styled(FaReceipt)``;
export const ShopIcon = styled(RiShoppingCartLine)``;