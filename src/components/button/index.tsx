import React from "react";
import * as Styled from "./StyledButton";
import {ButtonProps} from "./ButtonModel";

export const PrimaryButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Styled.StandardItemPrimaryButton>
      {children}
    </Styled.StandardItemPrimaryButton>
  );
};

export const Button = ({children, size, onClick, variant, width}: ButtonProps) => {
  return (
    <Styled.ButtonVariation onClick={onClick} size={size} variant ={variant} width={width}>
      {children}
    </Styled.ButtonVariation>
  );
};