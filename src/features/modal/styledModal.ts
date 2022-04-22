import styled from "styled-components";
import { FontFamilyEnum, FontWeight } from "../../models/FontStyleEnum";
import {Styles} from "react-modal";

export const ModelInfoTitleP = styled.p`
  font-size: 18px;
  font-family: ${FontFamilyEnum.helvatica_neue_medium};
  font-weight: ${FontWeight.medium};
  text-align:center;
  margin-bottom: 1.25rem;
`;

export const CloseButtonContainerDiv = styled.div`
  text-align: right;
`;

export const ConfirmDiv = styled.div`
  margin-bottom: 1.25rem;
`;

export const CloseButton = styled.button`
  padding: none;
  border: none;
  background: transparent;
`

export const modalStyle :Styles = {
  overlay: {
    zIndex: 999,
    background: "rgba(0, 0, 0, 0.08)",
  },
  content: {
    background: "white",
    maxWidth: "380px",
    minWidth: "260px",
    width: "80%",
    margin: "25vh auto 0 auto",
    borderRadius: "0px",
    position: "relative",
    inset: "inherit",
    boxShadow: "rgb(0 0 0 / 30%) 0px 1px 3px 0px",
    textAlign: "center"
  },
};
